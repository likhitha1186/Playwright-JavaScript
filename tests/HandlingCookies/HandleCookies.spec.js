import { test } from '@playwright/test';
import { Login } from './Login1Page-Cookies.js';
import fs from 'fs';

test.describe('Handling Cookies', () => {
  test('Handle cookies', async ({ browser }) => {
    const context = await browser.newContext(); // Create a new browser context
    const page = await context.newPage(); // Create a new page

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log('Successfully logged in as Likhitha');
    await loginPage.selectWorkspace();
    await page.waitForLoadState('networkidle');

    // Get Cookies
    const getCookies = await context.cookies();
    console.log('Cookies before setting:', getCookies);

    // Add Cookies
    await context.addCookies([
      {
        name: 'auth.csrf',
        value:
          's%3Afo1pjgWAEEa%2FeISDLL9QqncpJGmyo6L4tZBc4LBnorI%3D.Fxo%2Bqg%2BRwoFgjWc7IbB3%2BdS6%2FrQgFUVcCkYkHMlQgCo',
        domain: '.trello.com',
        path: '/',
        expires: Math.floor(Date.now() / 1000) + 3600,
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
      },
    ]);

    await page.reload();

    // Get Cookies after adding
    let newCookies = await context.cookies();
    console.log('Cookies after adding:', newCookies);

    // Save the cookies in a file
    fs.writeFileSync('cookies.json', JSON.stringify(newCookies, null, 2));
    console.log('Cookies saved successfully');

    // Delete Cookies
    await context.clearCookies();
    console.log('Cookies deleted!');

    newCookies = await context.cookies();
    console.log('Cookies after deletion:', newCookies);

    // Load Cookies from File and Apply Again
    const storedCookies = JSON.parse(fs.readFileSync('cookies.json', 'utf8'));
    await context.addCookies(storedCookies);
    console.log('Loaded cookies from file and applied.');

    // Reload page to verify cookies
    await page.reload();
    const finalCookies = await context.cookies();
    console.log('Cookies after reloading:', finalCookies);
  });
});
