/**
 * Formats the json response
 * @param {*} isSuccessful 
 * @param {*} message 
 * @param {*} responseData 
 * @param {*} error 
 * @returns 
 */
export const jsonResponse = (isSuccessful, message, responseData, error) => {
    return {
        isSuccessful: isSuccessful,
        message,
        responseData,
        errorMessage: error
    };
};