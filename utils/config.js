const Config = {
    //user
    DEFAULT_ROLE: "PROCUMENT",
    DEFAULT_IMAGE: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    JWT__EXPIRED_IN: "365d",
    NAME: "Name",
    EMAIL: "Email",
    CONTACT_NO: "Contact No",
    USER_ROLE: "User Role",
    PASSWORD: "Password",
    DESCRIPTION: "Description",
    SHOP_NAME: "Shop Name",
    ADDRESS: "Address",
    IMAGE: "Image",
    //Item
};

const Messages = {
    INVALID_EMAIL_OR_PASSWORD: "Invalid Email or Password",
    LOGGED_IN_SUCCESSFULLY: "Logged in successfully",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    USER_WITH_GIVEN_EMAIL_ALREADY_EXIST: "User with given email already Exist",
    USER_CREATED_SUCCESSFULLY: "User created successfully",
    USER_NOT_FOUND: "User not found",
    INVALID_ID: "inavlidId",
    UNABLE_TO_ADD_ITEM: "Unable to add Item",
    UNABLE_TO_UPDATE_ITEM: "Unable to Update Item",
    UNABLE_TO_DELETE_ITEM: "Unable to Delete Item",
    UNABLE_TO_ADD_ORDER: "Unable to add Order",
    UNABLE_TO_UPDATE_ORDER: "Unable to Update Order",
    UNABLE_TO_DELETE_ORDER: "Unable to Delete Order",
    UNABLE_TO_UPDATE_STATUS: "Unable to Update Status",
    UNABLE_TO_UPDATE_ACCEPTANCE: "Unable to Update Acceptance",
    UNABLE_TO_UPDATE_ORDER_STATUS: "Unable to Update Order Status",
};

const HTTP = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    UNAUTHORIZED: 403,
    AUTHENTICATION_FAIL:401,
    CONFLICT: 401
};

const RoleValueMap = [
	{value: 0, key: "PROCUMENT"},
	{value: 1, key: "SUPPLIER"},
    {value: 2, key: "MANAGER"}
];

const OrderStatus = [
	{value: 0, key: "ADDED_TO_CART"},
	{value: 1, key: "ADDED_AS_AN_ORDER"},
    {value: 2, key: "REMOVED"}
];

const Status = [
	{value: 0, key: "Visible"},
	{value: 1, key: "Hidden"}
];

const Accepted = [
	{value: 0, key: "False"},
	{value: 1, key: "True"}
];

const AprovedStatus = [
	{value: 0, key: "Declined"},
	{value: 1, key: "Approved"}
];

export default {Config, OrderStatus, Messages, HTTP, Status, RoleValueMap, Accepted, AprovedStatus};
