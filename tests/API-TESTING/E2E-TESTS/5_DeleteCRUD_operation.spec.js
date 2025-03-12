import { test, expect } from "@playwright/test";
import { deleteTrello } from '../HelpersFile/Helpers.js';
import fs from "fs";

const { baseURL, apiKey, token } = deleteTrello();
const boardDataFile = "./boardData.json";
const boardData = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
const { boardId, boardName, cardId, cardName, labelId, labelName } = boardData;

console.log("\n### Scenario: Delete CRUD operation ###"); // Scenario Title

test.describe.serial("Delete CRUD operation", () => {
  
  test("Delete a Label", async ({ request }) => {
    console.log("1) Running: Delete a Label...");
    const response = await request.delete(`${baseURL}/labels/${labelId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);
    console.log(` 1. Successfully deleted label: ${labelName}`);
  });
  
  test("Delete a Card", async ({ request }) => {
    console.log("2) Running: Delete a Card...");
    const response = await request.delete(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);
    console.log(` 2. Successfully deleted card: ${cardName}`);
  });
  
  test("Delete a Board", async ({ request }) => {
    console.log("3) Running: Delete a Board...");
    const response = await request.delete(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);
    console.log(` 3. Successfully deleted board: ${boardName}`);
  });
});
