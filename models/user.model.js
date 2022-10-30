import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import validatePw from "joi-password-complexity";
import Config from "../utils/config.js";

// The schema for the Users document in mongodb
const userSchema = new mongoose.Schema({
	name: { 
		type: String 
	},
	email: { 
		type: String, 
		required: true, 
		unique: true 
	},
	contactNo: { 
		type: String 
	},
	roleId: { 
		type: String, 
		default: Config.DEFAULT_ROLE 
	},
	password: { 
		type: String, 
		required: true 
	},
	description: { 
		type: String 
	},
	shopName: { 
		type: String 
	},
	address: { 
		type: String 
	},
	imageUrl: { 
		type: String, 
		default: Config.DEFAULT_IMAGE 
	},
	},
	{ timestamps: true }
);

/**
 * Creates a JSON web token
 * @returns - token
 */
userSchema.methods.generateAuthToken = function () {
	// eslint-disable-next-line no-undef
	const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATEKEY, {
		expiresIn: "365d",
	});
	return token;
};

const User = mongoose.model("User", userSchema);

/**
 * This method creates a Joi schema object and uses it to validate the data that are passed to it using its validate() method.
 * @param {*} data 
 * @returns 
 */
const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().label("Name"),
		email: Joi.string().email().required().label("Email"),
        contactNo: Joi.string().label("Contact No"),
		roleId: Joi.string().label("User Role"),
		password: Joi.required().label("Password"),
		description: Joi.string().label("Description"),
		shopName: Joi.string().label("Shop Name"),
		address: Joi.string().label("Address"),
		imageUrl: Joi.string().label("Image"),
	});
	return schema.validate(data);
};

export { User, validate };