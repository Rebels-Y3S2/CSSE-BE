import {User, validate} from "../models/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import { jsonResponse } from "../utils/serviceUtilities.js";
import Config from "../utils/config.js";
import Messages from "../utils/config.js";
import HTTP from "../utils/config.js";

const validateUserData = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label(Config.EMAIL),
		password: Joi.string().required().label(Config.PASSWORD),
	});
	return schema.validate(data);
};

export const login = async (req, res) => {
	try {
		const { error } = validateUserData(req.body);
		if (error)
			return res.status(HTTP.BAD_REQUEST).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(HTTP.AUTHENTICATION_FAIL).send({ message: Messages.INVALID_EMAIL_OR_PASSWORD });

		//check if entered password is valid
		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
			return res.status(HTTP.AUTHENTICATION_FAIL).send({ message: Messages.INVALID_EMAIL_OR_PASSWORD });

		const token = user.generateAuthToken();
		res.status(HTTP.OK).send({ data: token, message: Messages.LOGGED_IN_SUCCESSFULLY, userData: user });
	} catch (error) {
		res.status(HTTP.SERVER_ERROR).send({ message: Messages.INTERNAL_SERVER_ERROR });
	}
};

export const register = async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(HTTP.BAD_REQUEST).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(HTTP.CONFLICT)
				.send({ message: Messages.USER_WITH_GIVEN_EMAIL_ALREADY_EXIST });

        //To get salt string we will be using genSalt and storing it in the salt variable
		// eslint-disable-next-line no-undef
		const salt = await bcrypt.genSalt(Number(process.env.SALT));

        //bcrypt password to hashing algorithm
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(HTTP.CREATED).send({ message: Messages.USER_CREATED_SUCCESSFULLY, isSuccessfull: true });
	} catch (error) {
		res.status(HTTP.SERVER_ERROR).send({ message: Messages.INTERNAL_SERVER_ERROR, isSuccessfull: false });
	}
};

export const findUser = (req, res) => {
    const filter = { id: req.query.id || Messages.INVALID_ID };
    User.findOne(filter, (error, users) => {
        error ?
            res.status(HTTP.SERVER_ERROR)
                .json(jsonResponse(false, error, error._message)) :
            res.status(HTTP.CREATED)
                .json(jsonResponse(true, users));
        });
};

export const findUsers = async(req, res) => {
    const filter = {};
    const { id, role, _id } = req.query;
        id && (filter.id = id);
        role && (filter.role = role);
	_id && (filter._id = _id);
    await User.find(filter, (error, users) => {
        error ?
            res.status(HTTP.SERVER_ERROR)
                .json(jsonResponse(false, error, error._message)) :
            res.status(HTTP.CREATED)
                .json(jsonResponse(true, users));
        });
};

export const updateUser = async(req, res) => {
    const id = req.params.id;
    const getUpdatedData = { new: true };

    await User.findByIdAndUpdate(id, req.body, getUpdatedData, (error, updatedUser) => {
        !updatedUser ? 
            res.status(HTTP.NOT_FOUND)
                .json(jsonResponse(false, updatedUser, Messages.USER_NOT_FOUND)) :
            error ? 
                res.status(HTTP.BAD_REQUEST)
                    .json(jsonResponse(false, error, error._message)) :
                res.status(HTTP.OK)
                    .json(jsonResponse(true, updatedUser));
    });       
};

export const deleteUser = async(req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id, (error, deletedUser) => {
        !deletedUser ? 
            res.status(HTTP.NOT_FOUND)
                .json(jsonResponse(false, deletedUser, Messages.USER_NOT_FOUND)) :
            error ? 
                res.status(HTTP.BAD_REQUEST)
                    .json(jsonResponse(false, error, error._message)) :
                res.status(HTTP.OK)
                    .json(jsonResponse(true, deletedUser));
    });       
};
