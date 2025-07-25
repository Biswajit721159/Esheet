const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        let res=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\nMongoDB connected`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

module.exports = connectDB;