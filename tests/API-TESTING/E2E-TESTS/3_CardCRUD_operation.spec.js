import { test, expect } from "@playwright/test";
import {createCards} from "../HelpersFile/Helpers.js";
import fs from "fs";
import {generateRandomFieldName} from "../HelpersFile/GeneratingRandomNames.js";

const { baseURL, CardName, apiKey, token } = createCards();
const boardDataFile = "./boardData.json";
const boardData = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
const { boardId, boardName, listId,listName } = boardData;
let attachmentID;

test.describe.serial("Cards CRUD operation", () => {
    test("Create a new card", async ({request}) => {
        const response = await request.post(`${baseURL}/cards?name=${CardName}&idList=${listId}&key=${apiKey}&token=${token}`, {
            headers: {Accept: "application/json"},
        });
        expect(response.status()).toBe(200);
        let res = await response.json();
        const cardId = res.id;
        const cardName = res.name;

        // Update boardData.json with the new Card details
        boardData.cardId = cardId;
        boardData.cardName = cardName;
        fs.writeFileSync(boardDataFile, JSON.stringify(boardData, null, 2));
        console.log(`Created Card: ${cardName} on List: ${listName} (Board: ${boardName})`);
        console.log(await response.json());
    })

    test("Get a card by its ID", async ({request}) => {
        const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
    });

    test("Update a card", async ({request}) => {
        const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.put(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`, {
            headers: {"Content-Type": "application/json"},
            data: {
                "desc": "Updated description at" + new Date().toISOString()
            }
        });

        expect(response.status()).toBe(200);
    });

    test.skip("Delete a Card", async ({request}) => {
        const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.delete(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
    });

    test("Get a field on a Card", async ({request}) => {
        const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
        const filedName = generateRandomFieldName();
        console.log(filedName)

        const response = await request.get(`${baseURL}/cards/${cardId}/${filedName}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
    });

    test("Get Actions on a Card", async ({request}) => {
        const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}/actions?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
    });

    test("Create Attachment On Card", async ({request}) => {
        const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.post(`${baseURL}/cards/${cardId}/attachments?key=${apiKey}&token=${token}`,{
            data:{
                "name" : "trello-power-up",
               // "file":"C:/Users/likhithap/Downloads/image-20240612-094206",
                "mimeType" : "text/png",
                "setCover" : "false",
               "url": "https://trello.com/c/ccPN1tMZ/8-review-meetings"
               // "url": "https://glitch.com/~trello-attachments-api"
            }
        });

        expect(response.status()).toBe(200);
        console.log(await response.json());
        let res = await response.json();
        boardData.attachmentID = res.id;
        fs.writeFileSync(boardDataFile, JSON.stringify(boardData, null, 2));

    });

    test("Get an Attachment On Card", async ({request}) => {
        const {cardId, attachmentID} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}/attachments/${attachmentID}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
    });

    test("Get the Board the Card is on", async ({request}) => {
        const {cardId} = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}/board?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
        let res = await response.json();
        expect(res.name).toEqual(boardName)
    });


});
