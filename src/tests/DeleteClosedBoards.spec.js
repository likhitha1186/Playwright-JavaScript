import { test, expect } from '@playwright/test';
import { Login } from '../../Pages/Login1Page.js';

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log('Successfully logged in');
    await page.waitForTimeout(5000);
    await loginPage.selectWorkspace();
    console.log("Successfully Likhitha's workspace selected");
});

test('Delete closed boards', async () => {
    //await page.getByTestId('open-boards-link').click();
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='View all closed boards']").click();
    await page.waitForTimeout(2000);

    const  deleteButtons = await page.$$('//button[contains(text(), "Delete")]');
    console.log(`Total  closed boards: ${deleteButtons.length}`)
        for (const button of deleteButtons) {
            await button.click();
            const confirmButton = page.locator("//button[@data-testid='close-board-delete-board-confirm-button']");
                await confirmButton.click();
        }
    console.log('Successfully deleted all closed boards.');
});
