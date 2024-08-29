import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URL;

const MongoConnect = () => {
    return mongoose.connect(mongo_url)
        .then(() => {
            console.log("MongoDb Connected");
        })
        .catch((err) => {
            console.log("MongoDB Connection Error: ", err);
        })
}

export default MongoConnect;