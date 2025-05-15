import { test, expect } from '@playwright/test';
import { Credentials } from "./Env.js";

//const {  username, password, baseURL } = Credentials();
const credentials = Credentials()

test('has title', async ({ page }) => {
    await page.goto(credentials.baseURL);

    await page.locator("//input[@placeholder='Username']").fill(credentials.username)
    await page.locator("//input[@placeholder='Password']").fill(credentials.password)
    await page.waitForTimeout(5000)
    await page.locator("[type='submit']").click()
    await page.waitForTimeout(5000)

    await expect(page).toHaveTitle(/OrangeHRM/);
});


// test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
//
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
