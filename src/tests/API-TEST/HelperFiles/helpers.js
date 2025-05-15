import dotenv from 'dotenv';

dotenv.config();

export function getTrelloParams() {
    return {
        name: 'Playwright',
        apiKey: process.env.API_KEY,
        token: process.env.TOKEN,
        baseURL: process.env.BASE_URL,
    };
}
