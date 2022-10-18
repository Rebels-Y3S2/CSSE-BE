import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import validatePw from "joi-password-complexity";
import Config from "../utils/config.js";

const userSchema = new mongoose.Schema({
		name: { type: String },
		email: { type: String, required: true },
		contactNo: { type: String },
		roleId: { type: Number, default: Config.DEFAULT_ROLE },
		password: { type: String, required: true },
		description: { type: String },
		shopName: { type: String },
		address: { type: String },
		imageUrl: { type: String, default: Config.DEFAULT_IMAGE },
	},
	{ timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATEKEY, {
		expiresIn: Config.JWT__EXPIRED_IN,
	});
	return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().label(Config.NAME),
		email: Joi.string().email().required().label(Config.EMAIL),
        contactNo: Joi.string().label(Config.CONTACT_NO),
		roleId: Joi.string().label(Config.USER_ROLE),
		password: validatePw().required().label(Config.PASSWORD),
		description: Joi.string().label(Config.DESCRIPTION),
		shopName: Joi.string().label(Config.SHOP_NAME),
		address: Joi.string().label(Config.ADDRESS),
		imageUrl: Joi.string().label(Config.IMAGE),
	});
	return schema.validate(data);
};

export { User, validate };