import mockingoose from "mockingoose/lib";
import { Item } from "../../models";
import { TestConstants } from "../../utils/constants/testConstants";
import {
  fetchItemService,
  fetchItemsService,
} from "../item.service";
import { itemData } from "./testConfig";

/**
 * Should return an array of items within a promise
 */
test(TestConstants.FETCH_ITEMS_TEST, async () => {
  const items = itemData.validItemsList;

  // mocking mongoose
  mockingoose(Item).toReturn(items, TestConstants.FIND);
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
test(TestConstants.FETCH_ITEMS_EMPTY_RESPONSE_TEST, async () => {
  const items = itemData.emptyItemList;

  // Mocking mongoose
  mockingoose(Item).toReturn(items, TestConstants.FIND);

  const response = await fetchItemsService();

  expect(response.length).toEqual(0);
});

/**
 * Should return and array of items in the normal usecase
 */
test(TestConstants.FETCH_MULTIPLE_ITEMS, async () => {
  const items = itemData.validItemsList;

  // Mocking mongoose
  mockingoose(Item).toReturn(items, TestConstants.FIND);

  const response = await fetchItemsService();

  expect(response).toBeTruthy();
  expect(response.length === 0).not.toBe(true);
});

/**
 * Should return an item object when a valid item id is passed.
 */
test(TestConstants.FETCH_ITEM_WITH_VALID_ID_TEST, async () => {
  const item = itemData.validItem;

  // Mocking mongoose
  mockingoose(Item).toReturn(item, TestConstants.FIND_ONE);

  const response = await fetchItemService(TestConstants.FETCH_ITEM_ID);

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
test(TestConstants.FETCH_ITEM_WITH_INVALID_ID_TEST, async () => {
  const item = itemData.invalidItem;
  
  // Mocking mongoose
  mockingoose(Item).toReturn(item, TestConstants.FIND_ONE);
  
  const response = await fetchItemService(TestConstants.FETCH_ITEM_ID);
  expect(response.itemName).not.toBeTruthy();
});
