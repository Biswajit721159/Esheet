let { Schema, model } = require("mongoose");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowecase: true,
			trim: true,
		},
		fullName: {
			type: String,
			required: true,
			trim: true,
			index: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
        },
        role: {
            type: Number,
            enum: [1, 2],
            default : 1,
        },
		passwordResetToken: {
			type: String,
			default: "",
		},
		isBlackListUser: {
			type: Boolean,
			default: false,
		},
		OTP: {
			type: String,
			default: "",
		},
		otpSaveTime: {
			type: Date,
			default: "",
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
		lastUpdatedBy: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
	let data = jwt.sign(
		{
			_id: this._id,
			email: this.email,
			name: this.name,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
		}
	);
	return data;
};

userSchema.pre("save", async function (next) {
	if (!this.isModified("OTP")) return next();
	this.OTP = await bcrypt.hash(this.OTP, 10);
	next();
});

userSchema.methods.isOTPCorrect = async function (OTP) {
	return await bcrypt.compare(OTP, this.OTP);
};

let User = model("user", userSchema);
module.exports = User;