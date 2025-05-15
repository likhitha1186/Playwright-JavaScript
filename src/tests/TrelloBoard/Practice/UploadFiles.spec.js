import { test, expect } from '@playwright/test';
import { Loginpage } from '../../../../Pages/LoginPage.js';

test('Upload a file ', async ({ page }) => {
    const login = new Loginpage(page);
    await login.gotoUrl();
    await page.setViewportSize({ width: 1920, height: 1040 });
    await login.getloginbutton1();
    await login.getEmailid('likhithapk.1186@gmail.com');
    await login.getRemberMeCheckbox();
    await login.getcontinuebutton();
    await login.getPassword('Bq,f%7N9-46JiKT');
    await login.getLoginbutton();
    await page.waitForTimeout(1000);
    await page.getByText('Workspaces').click();
    await page.locator('.TaNgu9ncpvX1uL').click;
    await page.waitForTimeout(2000);
    await page.getByTestId('templates-menu').click();
    await page.locator('.VSxlmEYC3befsX').nth(1).click();
    await page.getByTestId('create-board-submit-button').click()
   // await page.locator("textarea[placeholder='Enter list name…']").fill('Ticket 01');
    await page.locator("//li[@data-testid='list-wrapper'][1]//li").first().click();
    await page.getByTestId('card-back-attachment-button').click();
    // await page.getByText('Choose a file').setInputFiles(path.join(process.cwd(), '/UploadFiles/Playwright.txt'))
    // await page.getByText('Choose a file').setInputFiles(path.join(process.cwd(), '/UploadFiles/trello.PNG'))
    // await page.getByText('Choose a file').setInputFiles([
    //     path.join(process.cwd(), '/UploadFiles/Playwright.txt'),
    //     path.join(process.cwd(),'/UploadFiles/trello.PNG')
    // ]);
   // await page.getByText('Choose a file').setInputFiles(__dirname, '/UploadFiles/Playwright.txt')
    await page.getByText('Choose a file').setInputFiles( 'C:/Users/likhithap/WebstormProjects/PlaywrightAutomation/UploadFiles/Playwright.txt')
    await page.waitForTimeout(5000)
    await page.close();
});
