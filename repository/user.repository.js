import Joi from "joi";
import { User } from "../models/index.js";
import { Config } from "../utils/constants/config.js";

/**
 * Handles the repository logic related to creating a user in database
 * @param {*} data 
 * @returns - createdUserObject
 */
export const createUser = (data) =>
    User.create(data);

/**
 * Handles the repository logic related to retrieving users from the database.
 * @returns - userArray
 */
export const fetchUsers = () =>
    User.find();

/**
 * Handles the repository logic related to retrieving a user from the database relating to the userId.
 * @param {*} userId 
 * @returns - userObject
 */
export const fetchUser = (userId) =>
    User.findById(userId);

/**
 * Handles the repository logic related to retriving a user from the database by the email
 * @param {*} email 
 * @returns - userObject
 */
export const fetchUserByEmail = (email) =>
    User.findOne(email);

/**
 * Handles the repository logic related to retriving a user from the database by the userId
 * @param {*} userId 
 * @returns 
 */
export const fetchUserById = (userId) =>
    User.findById(userId);

/**
 * Handles the repository logic related to updating a user in the database relating to the userId
 * @param {*} userId 
 * @param {*} data 
 * @returns 
 */
export const updateUser = (userId, data) =>
    User.findByIdAndUpdate(userId, data, {new : true});

/**
 * Handles the repository logic related to deleting a user from the database relating to the userId
 * @param {*} userId 
 * @returns 
 */
export const deleteUser = (userId) =>
    User.findByIdAndDelete(userId);

/**
 * This method creates a Joi schema object and uses it to validate the data that are passed to it using its validate() method.
 * @param {*} data 
 * @returns 
 */
export const validateUserData = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label(Config.EMAIL),
        password: Joi.string().required().label(Config.PASSWORD),
    });
    return schema.validate(data);
};
    
    

