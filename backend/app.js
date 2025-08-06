require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/database.js");

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/organizations", require("./src/routers/organizations"));
app.use("/api/users", require("./src/routers/users"));

app.get("/", (req, res) => {
    res.send("Server is Running clearly");
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server running on port ${PORT}`);
    } catch (err) {
        console.error("DB connection failed", err);
        process.exit(1);
    }
});

