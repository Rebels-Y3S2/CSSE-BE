const Config = {
    //user
    USER_SCHEMA_MODEL: "user",
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
    ITEM_SCHEMA_MODEL: "item",
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

export default {Config, Status, RoleValueMap, Accepted, AprovedStatus};
