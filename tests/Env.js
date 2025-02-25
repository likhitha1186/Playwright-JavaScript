import dotenv from 'dotenv';

dotenv.config();

export function Credentials() {
    const env = process.env.NODE_ENV || 'dev';

    const config = {
        stg: {
            name: 'Playwright',
            baseURL: process.env.STG_URL,
            username: process.env.STG_USERNAME,
            password: process.env.STG_PASSWORD,
        },
        dev: {
            name: 'Playwright',
            baseURL: process.env.DEV_URL,
            username: process.env.DEV_USERNAME,
            password: process.env.DEV_PASSWORD,
        },
        test: {
            name: 'Playwright',
            baseURL: process.env.TEST_URL,
            username: process.env.TEST_USERNAME,
            password: process.env.TEST_PASSWORD,
        }
    };

    return config[env] || {};
}
