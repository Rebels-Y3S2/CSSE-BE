import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import validatePw from "joi-password-complexity";

const userSchema = new mongoose.Schema({
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String, required: true },
		contactNo: { type: String },
		role: { type: String, default: "PROCUREMENT" },
		password: { type: String, required: true },
		pic: { type: String, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" },
	},
	{ timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().label("First Name"),
		lastName: Joi.string().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
        contactNo: Joi.string().label("Contact No"),
		role: Joi.string().label("User Role"),
		password: validatePw().required().label("Password"),
		pic: Joi.string().label("Profile Pic"),
	});
	return schema.validate(data);
};

export { User, validate };