import { test, expect } from "@playwright/test";
import { createBoards } from "../HelpersFile/Helpers.js";
import fs from "fs";

const { baseURL, name, apiKey, token } = createBoards();
const boardIdFile = "./boardId.txt";
const boardId = fs.readFileSync(boardIdFile, "utf8");

test.describe("Label CRUD operation", () => {

    test("Create Label on a Board", async ({ request }) => {
        const response = await request.post(`${baseURL}/boards/?name=${name}&key=${apiKey}&token=${token}`,
            {
                headers: { Accept: "application/json" },
            }
        );
        expect(response.status()).toBe(200);
        let res = await response.json();
        const boardId = res.id;
        const boardName = res.name;

        fs.writeFileSync(boardIdFile, boardId);
        console.log(`Created Board: ${boardId}, ${boardName}`);
    });
    test("Get Trello Board", async ({ request }) => {
        const response = await request.get(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });
    test("Get Actions of a Board", async ({ request }) => {
        const response = await request.get(`${baseURL}/boards/${boardId}/actions?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });
    test("Update a Board", async ({ request }) => {
        const response = await request.put(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`,
            {
                data : {
                    "prefs/background": "purple"
                }
            });
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });
    test("Delete a Board", async ({ request }) => {
        const response = await request.delete(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });



});
