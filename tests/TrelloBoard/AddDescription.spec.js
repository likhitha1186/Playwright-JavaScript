import { test, expect } from '@playwright/test';
import { Loginpage } from '../../Pages/LoginPage.js';

test('Add Description', async ({ page }) => {
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
    await page.getByRole('link', { name: "L likhitha's workspace" }).click();
    await page.waitForTimeout(2000);
    await page.getByTestId('templates-menu').click();
    await page.locator('.VSxlmEYC3befsX').nth(1).click();
    await page.getByTestId('create-board-submit-button').click();
    await page.waitForTimeout(1000);
    await page.getByTestId('list-composer-add-list-button').click();
    await page.locator("//li[@data-testid='list-wrapper'][2]//li").first().click();
    await page.getByText('Add a more detailed description…').click();
    await page.locator("//button[@aria-label='Bold Ctrl+B']").click();
    await page.locator("//div[@class='akEditor css-1cx6zwm']//div[@data-testid='click-wrapper']").type('GOAL : ');
    await page.keyboard.press('Enter');
    await page.locator("//span[@class='css-70qvj9']").click()
    await page.locator("//p[normalize-space()='Normal text']").click();
    await page.locator("//div[@class='akEditor css-1cx6zwm']//div[@data-testid='click-wrapper']").type('Is a critical phase in software development where the application is made available to users in a production environment..');
    await page.locator("//button[@aria-label='Link Ctrl+K']").click()
    await page.locator('[placeholder="Find recent links or paste a new link"]').fill('https://aws.amazon.com/blogs/devops/tag/serverless/');
    await page.getByTestId('link-picker-insert-button').click()
    await page.locator("button[aria-label='Image'] span[class='css-snhnyn']").click()
    await page.getByLabel('upload-from-computer').setInputFiles('C:/Users/likhithap/WebstormProjects/PlaywrightAutomation/UploadFiles/trello.PNG')
    await page.getByLabel('upload-from-url-submit').click()
    await page.getByTestId("//button[@class='Y9J4BArcarEAX9 w2xTtMFx5WCdox bxgKMAm3lq5BpA HAVwIqCeMHpVKh SEj5vUdI3VvxDc']").click()
    await page.getByTestId('description-save-button').click();
    await page.close()
});


