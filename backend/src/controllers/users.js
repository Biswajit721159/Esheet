const organizations = require("../models/organizations");
const users = require("../models/users");

const createUsers = async(req,res) => {
    try {
        const {email, fullName, password} = req.body;
        const user = await users.create({ email, fullName, password });
        // await organizations.updateOne({ email: user.email }, { $push: { users: user._id } });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const loginUsers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Password is incorrect" });

        const accessToken = user.generateAccessToken();

        // Set token in cookie
        res.cookie("token", accessToken, {
            httpOnly: true,          // Prevent access from JavaScript (security)
            secure: true,            // Use HTTPS
            sameSite: "strict",      // Prevent CSRF
            maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
        });

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const registerUsers = async (req, res) => {
    try {
        const { email, fullName, password } = req.body;
        const user = await users.create({ email, fullName, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {createUsers,loginUsers,registerUsers};