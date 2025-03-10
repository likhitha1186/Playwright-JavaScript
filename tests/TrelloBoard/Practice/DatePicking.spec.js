import { test, expect } from '@playwright/test';
import { Loginpage } from '../../../Pages/LoginPage.js';

test('Adding Due Date', async ({ page }) => {
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
    await page.locator('.TaNgu9ncpvX1uL').click();
    await page.waitForTimeout(2000);
    const BoardList = await page.$$("//div[@data-testid='workspace-boards-and-views-lists']//div[3]//li");
    console.log('number of boards items :', BoardList.length);
    await page.getByTestId('templates-menu').click();
    await page.locator('.VSxlmEYC3befsX').nth(1).click();
    await page.getByTestId('create-board-submit-button').click();
    await page.locator("textarea[placeholder='Enter list name…']").fill('Ticket 01');
    await page.waitForTimeout(1000);
    await page.getByTestId('list-composer-add-list-button').click();
    const DoneList = await page.$$("//li[@data-testid='list-wrapper'][2]//li");
    console.log('Number of Done List items : ', DoneList.length);
    await page.locator("//li[@data-testid='list-wrapper'][2]//li").first().click();
    await page.getByTestId('card-back-due-date-button').click()
    await page.locator("//span[@class= 'CpyGgjAzUkQDno']//*[name()='svg']").click()
    await page.waitForTimeout(2000)
    const month ='May 2025', date = '19';
    while (true){
        const currentMonth = await page.locator('.css-1b2rkmw').textContent()
        if( currentMonth === month){
            break;
        }
        await page.click("//div[@class='atlaskit-portal-container']//button[2]//span[1]//span[1]")
    }
    await page.click(`//button[@class='css-1w4y8d4'][text()='${date}']`)
    await page.waitForTimeout(5000)
    await page.getByTestId("save-date-button").click()
    await page.close();
});
