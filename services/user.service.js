import { validate } from "../models/user.model.js";
import { 
    createUser, 
    deleteUser, 
    fetchUserByEmail, 
    fetchUserById, 
    fetchUsers, 
    updateUser, 
    validateUserData 
} from "../repository/index.js";
import bcrypt from "bcrypt"

/**
 * Validates the data by utilizing validateUserData() method
 * Handles the repository logic sent from the fetchUserByEmail() method
 * @param {*} data 
 * @returns - userObject
 */
export const loginService = (data) =>{
    const { email, password } = data;
    const result = validateUserData({email, password})
    if (result.error){
        throw (result.error.details[0].message)
    }else{
        return fetchUserByEmail({email})
    }
}

/**
 * Validates the data by utilizing the validate() method
 * Encrypts the password sent in the data
 * Handles the repository logic sent from the createUser() method
 * @param {*} data 
 * @returns - createdUserObject
 */
export const registerService = (data) =>{
    const { name, email, contactNo, roleId, password, description, shopName, address, imageUrl } = data;
    const validation = validate(data);
    if(validation.error){
        throw (validation.error.details[0].message);
    }else{
		const salt = bcrypt.genSaltSync(Number(process.env.SALT));
        //bcrypt password to hashing algorithm
		const hashPassword = bcrypt.hashSync(password, salt);
        return createUser({name, email, contactNo, roleId, password:hashPassword, description, shopName, address, imageUrl});
    }
}

/**
 * Handles the repository logic sent from fetchUsers() method
 * @returns - usersArray
 */
export const fetchUsersService = () =>{
    return fetchUsers();
}

/**
 * Handles the repository logic sent from the fetchUserById() method
 * @param {*} userId 
 * @returns - userObject
 */
export const fetchUserService = (userId) =>{
    return fetchUserById(userId)
}

/**
 * Handles the repository logic sent from the updateUser() method
 * @param {*} userId 
 * @param {*} data 
 * @returns - updatedUserObject
 */
export const updateUserService = (userId, data) =>{
    const { name, email, contactNo, roleId, password, description, shopName, address, imageUrl } = data;
    const salt = bcrypt.genSaltSync(Number(process.env.SALT));
    //bcrypt password to hashing algorithm
    const hashPassword = bcrypt.hashSync(password, salt);
    return updateUser(userId, {name, email, contactNo, roleId, password:hashPassword, description, shopName, address, imageUrl});

}

/**
 * Handles the repository logic set from the deleteUser() method
 * @param {*} userId 
 * @returns 
 */
export const deleteUserService  = (userId) =>{
    return deleteUser(userId);
}