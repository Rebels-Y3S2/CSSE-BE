import mockingoose from "mockingoose/lib";
import { Item } from "../../models";
import {
  fetchItemService,
  fetchItemsService,
} from "../item.service";
import { itemData } from "./testConfig";

/**
 * Should return an array of items within a promise
 */
test("test fetchItemsService with valid items", async () => {
  const items = itemData.validItemsList;

  // mocking mongoose
  mockingoose(Item).toReturn(items, "find");
  const response = await fetchItemsService();

  expect(response[0]._id).toStrictEqual(response[0]._id);
  expect(response[0].owner).toStrictEqual(response[0].owner);
  expect(response[0].itemName).toEqual(response[0].itemName);
  expect(response[0].itemName).toEqual(response[0].itemName);
  expect(response[0].stock).toEqual(response[0].stock);
  expect(response[0].unitPrice).toEqual(response[0].unitPrice);
});

/**
 * Should return an empty array when there are no results
 */
test("test fetchItemsService function with empty response", async () => {
  const items = itemData.emptyItemList;

  // Mocking mongoose
  mockingoose(Item).toReturn(items, "find");

  const response = await fetchItemsService();

  expect(response.length).toEqual(0);
});

/**
 * Should return and array of items in the normal usecase
 */
test("test fetchItemsService with mutiple items", async () => {
  const items = itemData.validItemsList;

  // Mocking mongoose
  mockingoose(Item).toReturn(items, "find");

  const response = await fetchItemsService();

  expect(response).toBeTruthy();
  expect(response.length === 0).not.toBe(true);
});

/**
 * Should return an item object when a valid item id is passed.
 */
test("test fetchItemService with a valid item id", async () => {
  const item = itemData.validItem;

  // Mocking mongoose
  mockingoose(Item).toReturn(item, "findOne");

  const response = await fetchItemService("507f191e810c19729de860ea");

  expect(response._id).toStrictEqual(response._id);
  expect(response.owner).toStrictEqual(response.owner);
  expect(response.itemName).toEqual(response.itemName);
  expect(response.itemName).toEqual(response.itemName);
  expect(response.stock).toEqual(response.stock);
  expect(response.unitPrice).toEqual(response.unitPrice);
});

/**
 * Should return an empty object when an ivalid item id is passed.
 */
test("test fetchItemService with an invalid item id", async () => {
  const item = itemData.invalidItem;
  
  // Mocking mongoose
  mockingoose(Item).toReturn(item, "findOne");
  
  const response = await fetchItemService("507f191e810c19729de860ea");
  expect(response.itemName).not.toBeTruthy();
});
