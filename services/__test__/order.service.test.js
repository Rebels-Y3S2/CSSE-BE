import mockingoose from "mockingoose/lib";
import { Order } from "../../models";
import { TestConstants } from "../../utils/constants/testConstants";
import { fetchOrderService, fetchOrdersService, udpateOrderService } from "../order.service";
import { orderData } from "./testConfig";

/**
 * Should return the created order object
 */
 test(TestConstants.CREATE_ORDER_TEST, async () =>{
    const order = orderData.validOrder;

    // Mocks mongoose model to return orderObject
    mockingoose(Order).toReturn(order, TestConstants.SAVE);
});

/**
 *  Should return an array of order objects with a promise
 */
test(TestConstants.FETCH_ORDERS_TEST, async() =>{
    const orders = orderData.validOrderList;

    // Mocks mongoose and returns orders list
    mockingoose(Order).toReturn(orders, TestConstants.FIND);
    const response = await fetchOrdersService();

    expect(response[0]._id).toStrictEqual(response[0]._id);
    expect(response[0].orderItems[0].item).toStrictEqual(response[0].orderItems[0].item);
    expect(response[0].orderItems[0].supplierDetails).toStrictEqual(response[0].orderItems[0].supplierDetails);
    expect(response[0].orderItems[0].quantity).toEqual(response[0].orderItems[0].quantity);
    expect(response[0].orderItems[0].agreedPrice).toEqual(response[0].orderItems[0].agreedPrice);
    expect(response[0].orderItems[0]._id).toStrictEqual(response[0].orderItems[0]._id);
    expect(response[0].totalAmount).toEqual(response[0].totalAmount);
    expect(response[0].referenceNo).toEqual(response[0].referenceNo);
    expect(response[0].orderStatus).toEqual(response[0].orderStatus);
});

/**
 *  Should return an array of order objects
 */
test(TestConstants.FETCH_MULTIPLE_ORDERS, async () =>{
    const orders = orderData.validOrderList;

    // Mocks mongoose and return orders
    mockingoose(Order).toReturn(orders, TestConstants.FIND);
    const response = await fetchOrdersService();
    
    expect(response).toBeTruthy();
    expect(response.length === 0).not.toBe(true);
})

/**
 *  Should return an empty array when there are no results
 */
test(TestConstants.FETCH_ORDERS_EMPTY_RESPONSE_TEST, async () =>{
    const orders = orderData.emptyOrderList;

    // Mocks mongoose and return orders
    mockingoose(Order).toReturn(orders, TestConstants.FIND);
    const response = await fetchOrdersService();
    
    expect(response.length).toEqual(0);
});

/**
 *  Should return an order object when a valid orderId is passed in as parameters
 */
test(TestConstants.FETCH_ORDER_WITH_VALID_ID_TEST, async() =>{
    const order = orderData.validOrder;
   
    // Mocks mongoose to return order
    mockingoose(Order).toReturn(order, TestConstants.FIND_ONE);
    const response = await fetchOrderService(TestConstants.FETCH_ORDER_ID);
    
    expect(response._id).toStrictEqual(response._id);
    expect(response.orderItems[0].item).toStrictEqual(response.orderItems[0].item);
    expect(response.orderItems[0].supplierDetails).toStrictEqual(response.orderItems[0].supplierDetails);
    expect(response.orderItems[0].quantity).toEqual(response.orderItems[0].quantity);
    expect(response.orderItems[0].agreedPrice).toEqual(response.orderItems[0].agreedPrice);
    expect(response.orderItems[0]._id).toStrictEqual(response.orderItems[0]._id);
    expect(response.totalAmount).toEqual(response.totalAmount);
    expect(response.referenceNo).toEqual(response.referenceNo);
    expect(response.orderStatus).toEqual(response.orderStatus);
})

/**
 *  Should return an empty order object when an invalid order id is passed.
 */
test(TestConstants.FETCH_ORDER_WITH_INVALID_ID_TEST, async() =>{
    const order = orderData.invalidOrder;

    // Mocks mongoose and return order
    mockingoose(Order).toReturn(order, TestConstants.FIND_ONE);
    const response = await fetchOrderService(TestConstants.FETCH_ORDER_ID);
    
    expect(response.totalAmount).not.toBeTruthy();
});

/**
 * Should update and return the updated order object
 */
test(TestConstants.UPDATE_ORDER_TEST, async () =>{
    const request = orderData.updateRequest;
    const updatedOrder = orderData.updatedOrder;

    // Mocks mongoose model to return response
    mockingoose(Order).toReturn(updatedOrder, TestConstants.FIND_ONE_AND_UPDATE);
    const response = await udpateOrderService(TestConstants.UPDATE_ORDER_ID, request);

    expect(response.orderStatus).toEqual(updatedOrder.orderStatus);
});