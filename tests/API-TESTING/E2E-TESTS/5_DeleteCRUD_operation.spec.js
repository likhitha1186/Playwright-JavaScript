import { test, expect } from "@playwright/test";
import { deleteTrello } from '../HelpersFile/Helpers.js';
import fs from "fs";

const { baseURL, apiKey, token } = deleteTrello();
const boardDataFile = "./boardData.json";


test.describe.serial("Delete CRUD operation", () => {

  test("Delete a Board", async ({ request }) => {
    const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

    const response = await request.delete(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);

  });

  test("Delete a Card", async ({ request }) => {
    const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

    const response = await request.delete(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);

  });


  test("Delete a Label", async ({ request }) => {
    const { labelId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

    const response = await request.delete(`${baseURL}/labels/${labelId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);

  });


});
