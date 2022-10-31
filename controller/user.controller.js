import { 
    loginService, 
    registerService, 
    fetchUserService, 
    fetchUsersService, 
    updateUserService,
    deleteUserService
} from "../services/index.js";
import Messages from "../utils/messages.js";
import { jsonResponse } from "../utils/serviceUtilities.js";
import bcrypt from "bcrypt";
import HTTP from "../utils/http.js";

/**
 * Handles the service logic sent from the loginService() method
 * @param {*} req 
 * @param {*} res 
 * @returns - the login token
 */
export const login = async(req, res) =>{
    try{
        const result = await loginService(req.body);
        if(result){
            // Compares the encrypted password in the database with the one in req.body
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                result.password
            );
            if (!isValidPassword){
			    return res.status(HTTP.AUTHENTICATION_FAIL).send(jsonResponse(false, Messages.INVALID_EMAIL_OR_PASSWORD));
            }
            const token = result.generateAuthToken();
            res.status(HTTP.OK).send(jsonResponse(true, Messages.LOGGED_IN_SUCCESSFULLY, token)); 
        }else{
            res.status(HTTP.NOT_FOUND).send(jsonResponse(false, Messages.USER_NOT_FOUND))
        }
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, error))
    }
}

/**
 * Hanldes the service logic sent from the registerService() method
 * @param {*} req 
 * @param {*} res 
 */
export const register = async(req, res) =>{
    try{
        const result = await registerService(req.body)
        res.status(HTTP.CREATED).send(jsonResponse(true, Messages.CREATE_SUCCESS, result));
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.CREATE_FAILED, error))
    }
}

/**
 * Handles the service logic sent from the fetchUsersService() method
 * @param {*} req 
 * @param {*} res 
 */
export const fetchUsers = async(req, res) =>{
    try{
        const users = await fetchUsersService()
        users.length === 0 
            ? res.status(HTTP.NO_CONTENT).send(jsonResponse(true, Messages.NO_DETAILS))
            : res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, users));
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.FETCH_FAILED, error));
    }
}

/**
 * Handles the service logic sent from the fetchUserService() method
 * @param {*} req 
 * @param {*} res 
 */
export const fetchUser = async(req, res) =>{
    try{
        const user = await fetchUserService(req.params.id)
        ! user 
            ? res.status(HTTP.NO_CONTENT).send(jsonResponse(true, Messages.NO_DETAILS))
            : res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, user));
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.FETCH_FAILED, error));
    }
}

/**
 * Handles the service logic sent from the udpateUserService() method
 * @param {*} req 
 * @param {*} res 
 */
export const updateUser = async(req, res) =>{
    try{
        const result = await updateUserService(req.params.id, req.body)
        res.status(HTTP.OK).send(jsonResponse(true, Messages.UPDATE_SUCCESS, result));
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.UPDATE_FAILED, error));
    }
}

/**
 * Handles the service logic sent from the deleteUserService() method
 * @param {*} req 
 * @param {*} res 
 */
export const deleteUser = async(req, res) =>{
    try{
        const result = await deleteUserService(req.params.id);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.DELETE_SUCCESS, result));
    }catch(error) {
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.DELETE_FAILED, error));
    }
}
