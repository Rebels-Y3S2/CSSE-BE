import {User, validate} from "../models/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import { jsonResponse } from "../utils/serviceUtilities.js";

const validateUserData = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

export const login = async (req, res) => {
	try {
		const { error } = validateUserData(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		//check if entered password is valid
		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully", userData: user });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

export const register = async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

        //To get salt string we will be using genSalt and storing it in the salt variable
		const salt = await bcrypt.genSalt(Number(process.env.SALT));

        //bcrypt password to hashing algorithm
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully", isSuccessfull: true });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error", isSuccessfull: false });
	}
};

export const findUser = (req, res) => {
    const filter = { id: req.query.id || 'inavlidId' };
    User.findOne(filter, (error, users) => {
        error ?
            res.status(500)
                .json(jsonResponse(false, error, error._message)) :
            res.status(201)
                .json(jsonResponse(true, users));
        })
}

export const findUsers = async(req, res) => {
    const filter = {};
    const { id, role, _id } = req.query;
        id && (filter.id = id);
        role && (filter.role = role);
	_id && (filter._id = _id);
    await User.find(filter, (error, users) => {
        error ?
            res.status(500)
                .json(jsonResponse(false, error, error._message)) :
            res.status(201)
                .json(jsonResponse(true, users));
        })
}

export const updateUser = async(req, res) => {
    const id = req.params.id;
    const getUpdatedData = { new: true };

    await User.findByIdAndUpdate(id, req.body, getUpdatedData, (error, updatedUser) => {
        !updatedUser ? 
            res.status(404)
                .json(jsonResponse(false, updatedUser, "User not found!")) :
            error ? 
                res.status(400)
                    .json(jsonResponse(false, error, error._message)) :
                res.status(200)
                    .json(jsonResponse(true, updatedUser));
    });       
}

export const deleteUser = async(req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id, (error, deletedUser) => {
        !deletedUser ? 
            res.status(404)
                .json(jsonResponse(false, deletedUser, "User not found!")) :
            error ? 
                res.status(400)
                    .json(jsonResponse(false, error, error._message)) :
                res.status(200)
                    .json(jsonResponse(true, deletedUser));
    });       
}
