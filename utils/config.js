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
}

const Messages = {
    UNABLE_TO_ADD_ITEM: "Unable to add Item",
    UNABLE_TO_UPDATE_ITEM: "Unable to Update Item",
    UNABLE_TO_DELETE_ITEM: "Unable to Delete Item",
    UNABLE_TO_ADD_ORDER: "Unable to add Order",
    UNABLE_TO_UPDATE_ORDER: "Unable to Update Order",
    UNABLE_TO_DELETE_ORDER: "Unable to Delete Order",
    UNABLE_TO_UPDATE_STATUS: "Unable to Update Status",
    UNABLE_TO_UPDATE_ACCEPTANCE: "Unable to Update Acceptance",
}

const HTTP = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    UNAUTHORIZED: 403,
    AUTHENTICATION_FAIL:401,
    CONFLICT: 401
}

const RoleValueMap = [
	{value: 0, key: 'PROCUMENT'},
	{value: 1, key: 'SUPPLIER'},
    {value: 2, key: 'MANAGER'}
];

const Status = [
	{value: 0, key: 'Visible'},
	{value: 1, key: 'Hidden'}
];

const Accepted = [
	{value: 0, key: 'False'},
	{value: 1, key: 'True'}
];

const AprovedStatus = [
	{value: 0, key: 'Declined'},
	{value: 1, key: 'Approved'}
]

export default {Config, Messages, HTTP, Status, RoleValueMap, Accepted, AprovedStatus};
