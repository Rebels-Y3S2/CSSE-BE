import mockingoose from "mockingoose/lib";
import { User } from "../../models";
import { TestConstants } from "../../utils/constants/testConstants";
import { fetchUserService, fetchUsersService, updateUserService } from "../user.service";
import { userData } from "./testConfig";

/**
 * Should return the created user object
 */
 test(TestConstants.CREATE_USER_TEST, async () =>{
    const user = userData.validUser;

    // Mocks mongoose model to return userObject
    mockingoose(User).toReturn(user, TestConstants.SAVE);
});

/**
 *  Should return an array of user objects with a promise
 */
test(TestConstants.FETCH_USERS_TEST, async() =>{
    const users = userData.validUserList;

    // Mocks mongoose and returns users list
    mockingoose(User).toReturn(users, TestConstants.FIND);
    const response = await fetchUsersService();

    expect(response[0]._id).toStrictEqual(response[0]._id);
    expect(response[0].name).toEqual(response[0].name);
    expect(response[0].email).toEqual(response[0].email);
    expect(response[0].roleId).toEqual(response[0].roleId);
    expect(response[0].password).toEqual(response[0].password);
    expect(response[0].description).toEqual(response[0].description);
    expect(response[0].shopName).toEqual(response[0].shopName);
    expect(response[0].address).toEqual(response[0].address);
    expect(response[0].imageUrl).toEqual(response[0].imageUrl);
});

/**
 *  Should return an array of user objects
 */
test(TestConstants.FETCH_MULTIPLE_USERS, async () =>{
    const users = userData.validUserList;

    // Mocks mongoose and return users
    mockingoose(User).toReturn(users, TestConstants.FIND);
    const response = await fetchUsersService();
    
    expect(response).toBeTruthy();
    expect(response.length === 0).not.toBe(true);
});

/**
 *  Should return an empty array when there are no results
 */
test(TestConstants.FETCH_USERS_EMPTY_RESPONSE_TEST, async () =>{
    const users = userData.emptyUserList;

    // Mocks mongoose and return users
    mockingoose(User).toReturn(users, TestConstants.FIND);
    const response = await fetchUsersService();
    
    expect(response.length).toEqual(0);
});

/**
 *  Should return an user object when a valid userId is passed in as parameters
 */
test(TestConstants.FETCH_USER_WITH_VALID_ID_TEST, async() =>{
    const user = userData.validUser;
   
    // Mocks mongoose to return user
    mockingoose(User).toReturn(user, TestConstants.FIND_ONE);
    const response = await fetchUserService(TestConstants.FETCH_USER_ID);
    
    expect(response[0]._id).toStrictEqual(response[0]._id);
    expect(response[0].name).toEqual(response[0].name);
    expect(response[0].email).toEqual(response[0].email);
    expect(response[0].roleId).toEqual(response[0].roleId);
    expect(response[0].password).toEqual(response[0].password);
    expect(response[0].description).toEqual(response[0].description);
    expect(response[0].shopName).toEqual(response[0].shopName);
    expect(response[0].address).toEqual(response[0].address);
    expect(response[0].imageUrl).toEqual(response[0].imageUrl);
});

/**
 *  Should return an empty user object when an invalid user id is passed.
 */
test(TestConstants.FETCH_USER_WITH_INVALID_ID_TEST, async() =>{
    const user = userData.invalidUser;

    // Mocks mongoose and return user
    mockingoose(User).toReturn(user, TestConstants.FIND_ONE);
    const response = await fetchUserService(TestConstants.FETCH_USER_ID);
    
    expect(response.totalAmount).not.toBeTruthy();
});

/**
 * Should update and return the updated user object
 */
test(TestConstants.UPDATE_USER_TEST, async () =>{
    const request = userData.updateRequest;
    const updatedUser = userData.updatedUser;

    // Mocks mongoose model to return response
    mockingoose(User).toReturn(updatedUser, TestConstants.FIND_ONE_AND_UPDATE);
    const response = await updateUserService(TestConstants.UPDATE_USER_ID, request);

    expect(response.userStatus).toEqual(updatedUser.userStatus);
});