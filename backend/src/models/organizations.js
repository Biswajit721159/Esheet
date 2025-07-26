let { Schema, model } = require("mongoose");
const organizationSchema = new Schema(
    {
        organizationName: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
		email: {
			type: String,
			required: true,
			unique: true,
			lowecase: true,
			trim: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        // createdBy: {
        //     type: Schema.Types.ObjectId,
        //     ref: "users",
        //     required: true,
        // },
		isBlackListUser: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);


let  organizations = model("organizations", organizationSchema);
module.exports = organizations;