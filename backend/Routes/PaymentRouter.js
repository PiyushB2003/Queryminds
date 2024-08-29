import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";

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
                return res.status(500).json({ message: "Something went wrong while payment", success: false, error })
            }
            console.log(order);
            return res.status(200).json({data: order, success: true});
            
        })
    } catch (error) {
        console.log("Error occured in order: ", error);
        return res.status(500).json({ message: "Internal server error", success: false, error })
    }
})

export default PaymentRouter;