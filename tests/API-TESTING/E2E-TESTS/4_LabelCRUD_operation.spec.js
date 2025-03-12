import { test, expect } from "@playwright/test";
import { createBoards, createLabels } from '../HelpersFile/Helpers.js';
import fs from "fs";

const { baseURL, LabelName, apiKey, token } = createLabels();
const boardDataFile = "./boardData.json";
const boardData = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
const { boardId, boardName,cardName, listId,listName } = boardData;

test.describe.serial("Label CRUD operation", () => {

    test("Create Label on a Board", async ({ request }) => {
        const response = await request.post(`${baseURL}/labels/?name=${LabelName}&color=red&idBoard=${boardId}&key=${apiKey}&token=${token}`,
            {
                headers: { Accept: "application/json" },
            }
        );
        expect(response.status()).toBe(200);
        let res = await response.json();
        const labelId = res.id;
        const labelName = res.name;

        boardData.labelId = labelId;
        boardData.labelName =labelName;

        fs.writeFileSync(boardDataFile, JSON.stringify(boardData, null, 2));
        console.log(`Created label:${labelName} on card: ${cardName} (Board: ${boardName})`);
        console.log(await response.json());
    });


});
