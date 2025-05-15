import {test, expect} from '@playwright/test';

test('Drag And Drop', async ({page}) => {
    await page.goto('https://trello.com/homepage');
    // await page.waitForTimeout(5000)
    await page.getByText('Log in').click();
    await page.getByTestId('username').fill('likhithapk.1186@gmail.com');
    await page.getByRole('button', {name: 'Continue'}).click();
    await page.getByTestId('password').fill('Bq,f%7N9-46JiKT');
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.waitForTimeout(5000);
    await page.getByText('Workspaces').click();
    await page.getByText("likhitha's workspace").click();
    await page.waitForTimeout(5000);
    await page.getByLabel('Practice').click();
    await page.waitForTimeout(5000)
    const first = await page.locator("//li[@data-testid='list-card']").getByText("Playwright");
    const second = await page
      .locator("//li[@data-testid='list-wrapper'][2]")
      .getByRole('button', {name: 'Add a card'});
    await first.dragTo(second);
});

