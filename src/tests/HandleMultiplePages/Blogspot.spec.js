import {test, expect } from '@playwright/test';

test("New tab", async ({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.setViewportSize({ width: 1920, height: 1040 });

  await page.locator("//a[@href='http://www.selenium.dev']//button[@class='btn btn-info'][normalize-space()='click']").click();
  const pagePromise =  await context.waitForEvent('page');

  //const childPage = await pagePromise;
  await pagePromise.locator("//a[@class='selenium-button selenium-webdriver text-uppercase fw-bold']").click()
  await page.waitForTimeout(2000)

  console.log( await page.title());
  console.log(await pagePromise.title())

  await page.bringToFront();
  await page.waitForTimeout(2000)
})


test("New tab-1", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.setViewportSize({ width: 1920, height: 1040 });

  const [childPage] = await Promise.all([context.waitForEvent('page'),
    page.locator("//a[@href='http://www.selenium.dev']//button[@class='btn btn-info'][normalize-space()='click']").click()]);

  await childPage.locator("//a[@class='selenium-button selenium-webdriver text-uppercase fw-bold']").click();
  await page.waitForTimeout(2000);

  console.log(await page.title());
  console.log(await childPage.title());
  await page.bringToFront();

  await page.waitForTimeout(2000);
});
