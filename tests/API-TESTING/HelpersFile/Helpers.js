import dotenv from 'dotenv';
import {generateRandomBoardName, generateRandomListName, generateRandomCardName, generateRandomLabelName} from "./GeneratingRandomNames.js";

dotenv.config();

export function createBoards() {
    return {
        BoardName: generateRandomBoardName(),
        apiKey: process.env.API_KEY,
        token: process.env.TOKEN,
        baseURL: process.env.BASE_URL,
    };
}
export function createLists() {
    return {
        ListName: generateRandomListName(),
        apiKey: process.env.API_KEY,
        token: process.env.TOKEN,
        baseURL: process.env.BASE_URL,
    };
}
export function createCards() {
    return {
        CardName: generateRandomCardName(),
        apiKey: process.env.API_KEY,
        token: process.env.TOKEN,
        baseURL: process.env.BASE_URL,
    };
}
export function createLabels() {
    return {
        LabelName: generateRandomLabelName(),
        apiKey: process.env.API_KEY,
        token: process.env.TOKEN,
        baseURL: process.env.BASE_URL,
    };
}
