import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name','standard_user');

    await page.fill('#password' , 'secret_sauce');

    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');


    await page.click('#remove-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
    await page.click('[data-test="shopping-cart-badge"]');
    await page.click('#remove-sauce-labs-bolt-t-shirt');
    await page.click('#continue-shopping');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
    await page.click('#add-to-cart-sauce-labs-fleece-jacket');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    await page.click('[data-test="shopping-cart-link"]');
    await page.click('#checkout');
    await page.click('#cancel');



});