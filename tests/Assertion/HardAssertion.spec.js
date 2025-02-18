import {test, expect} from "@playwright/test";
import exp from "node:constants";

test("Hard Assertion", async ({page})=> {

    await page.goto("https://demo.nopcommerce.com/register")

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    const logoElement = await page.getByAltText('nopCommerce demo store')
    await expect(logoElement).toBeVisible()

    const searchBox = await page.getByPlaceholder('Search store');
    await expect(searchBox).toBeEnabled();

    const femaleRadioButton = await page.locator('#gender-female');
    await femaleRadioButton.click();
    await expect(femaleRadioButton).toBeChecked();

    const newsLetter = await page.locator('#Newsletter');
    await expect(newsLetter).toBeChecked();

    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type', 'submit');

    await expect(page.locator('.page-title h1')).toHaveText('Register')

    await expect(page.locator('.page-title h1')).toContainText('Reg')

    const lastName = await page.locator('#LastName');
    await lastName.fill("Likhitha")
    await expect(lastName).toHaveValue("Likhitha")

    const listMonth = await page.locator('select[name = DateOfBirthMonth] option');
    await expect(listMonth).toHaveCount(13);
})