import { test, expect } from "@playwright/test";
import { deleteTrello } from '../HelpersFile/Helpers.js';
import fs from "fs";

const { baseURL, apiKey, token } = deleteTrello();
const boardDataFile = "./boardData.json";
const boardData = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
const { boardId, cardId, labelId } = boardData;


test.describe.serial("Delete CRUD operation", () => {
  test("Delete a Label", async ({ request }) => {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Waits for 2 seconds

    // const { labelId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

    const response = await request.delete(`${baseURL}/labels/${labelId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);

  });
  test("Delete a Card", async ({request}) => {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Waits for 2 seconds

    // const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

    const response = await request.delete(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);

    expect(response.status()).toBe(200);
  });

  test("Delete a Board", async ({ request }) => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Waits for 2 seconds

    //  const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

    const response = await request.delete(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);

  });


});
