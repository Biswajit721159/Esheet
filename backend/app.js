let express = require("express");
let cors = require("cors");
let app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json({ limit: "50mb" }));
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

let connectDB = require('./src/config/database.js');
app.use(cors());
app.use(
	cors({
		origin: "*",
		methods: "GET, POST, PUT, DELETE, PATCH",
		allowedHeaders: "Content-Type",
	})
);

app.get("/", async (req, res) => {
	res.send("Server is Running clearly");
});

app.listen(PORT, async() => {
    await connectDB();
    console.log('server is running on port ',PORT)
});