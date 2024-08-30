import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import { Payment } from "../models/Payment.js";

const PaymentRouter = express.Router();

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})


PaymentRouter.post("/order", (req, res) => {
    const { amount } = req.body

    try {
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex")
        }
        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log("Order payment error: ", error);
                return res.status(500).json({ message: "Something went wrong while payment", success: false, error });
            }
            console.log(order);
            return res.status(200).json({ data: order, success: true });

        })
    } catch (error) {
        console.log("Order route catch error: ", error);
        return res.status(500).json({ message: "Internal server error", success: false, error })
    }
})

PaymentRouter.post("/verify", async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    console.log(req.body);
    
    try {
        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign.toString())
        .digest("hex")

        console.log(razorpay_signature === expectedSign);

        const isAuthentic = razorpay_signature === expectedSign;
        if (isAuthentic) {
            const payment = new Payment({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature
            })
            await payment.save();
            return res.status(200).json({ message: "Payment successful", success: true })
        }

    } catch (error) {
        console.log("Verify route catch error: ", error);
        return res.status(500).json({ message: "Internal server error", success: false, error });
    }
})
export default PaymentRouter;