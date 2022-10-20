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

export default {OrderStatus, Status, RoleValueMap, Accepted, AprovedStatus};