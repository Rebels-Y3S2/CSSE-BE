import { 
    loginService, 
    registerService, 
    fetchUserService, 
    fetchUsersService, 
    updateUserService,
    deleteUserService
} from "../services/index.js";
import Messages from "../utils/constants/messages.js";
import { jsonResponse } from "../utils/serviceUtilities.js";
import bcrypt from "bcrypt";
import HTTP from "../utils/constants/http.js";
import { logger } from "../utils/logger.js";
import { LoggerConstants } from "../utils/constants/loggerConstants.js";

/**
 * Handles the service logic sent from the loginService() method
 * @param {*} req 
 * @param {*} res 
 * @returns - the login token
 */
export const login = async(req, res) =>{
    try{
        logger.info(LoggerConstants.USER_LOGIN)
        const result = await loginService(req.body);
        if(result){
            // Compares the encrypted password in the database with the one in req.body
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                result.password
            );
            if (!isValidPassword){
                logger.error(LoggerConstants.USER_AUTH_FAILED)
			    return res.status(HTTP.AUTHENTICATION_FAIL).send(jsonResponse(false, Messages.INVALID_EMAIL_OR_PASSWORD));
            }
            const token = result.generateAuthToken();
            res.status(HTTP.OK).send(jsonResponse(true, Messages.LOGGED_IN_SUCCESSFULLY, token)); 
        }else{
            logger.error(LoggerConstants.NO_USER_FOUND)
            res.status(HTTP.NOT_FOUND).send(jsonResponse(false, Messages.USER_NOT_FOUND))
        }
    }catch(error) {
        logger.error(LoggerConstants.USER_LOGIN_ERROR)
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
        logger.info(LoggerConstants.USER_REGISTRATION)
        const result = await registerService(req.body)
        res.status(HTTP.CREATED).send(jsonResponse(true, Messages.CREATE_SUCCESS, result));
    }catch(error) {
        logger.error(LoggerConstants.USER_REGISTRATION_ERROR)
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
        logger.info(LoggerConstants.FETCH_USERS)
        const users = await fetchUsersService()
        users.length === 0 
            ? res.status(HTTP.NO_CONTENT).send(jsonResponse(true, Messages.NO_DETAILS))
            : res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, users));
    }catch(error) {
        logger.error(LoggerConstants.FETCH_USERS_ERROR)
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
        logger.info(LoggerConstants.FETCH_USER_BY_ID)
        const user = await fetchUserService(req.params.id)
        ! user 
            ? res.status(HTTP.NO_CONTENT).send(jsonResponse(true, Messages.NO_DETAILS))
            : res.status(HTTP.OK).send(jsonResponse(true, Messages.FETCH_SUCCESS, user));
    }catch(error) {
        logger.error(LoggerConstants.FETCH_USER_BY_ID_ERROR)
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
        logger.info(LoggerConstants.UPDATE_USER)
        const result = await updateUserService(req.params.id, req.body)
        res.status(HTTP.OK).send(jsonResponse(true, Messages.UPDATE_SUCCESS, result));
    }catch(error) {
        logger.error(LoggerConstants.UPDATE_USER_ERROR)
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
        logger.info(LoggerConstants.DELETE_USER)
        const result = await deleteUserService(req.params.id);
        res.status(HTTP.OK).send(jsonResponse(true, Messages.DELETE_SUCCESS, result));
    }catch(error) {
        logger.error(LoggerConstants.DELETE_USER_ERROR)
        res.status(HTTP.SERVER_ERROR).send(jsonResponse(false, Messages.DELETE_FAILED, error));
    }
}
