import { test, expect } from '@playwright/test';

test('Downloading files', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-file-download');

  let waitForDownloadEvent = page.waitForEvent('download');

  await page.locator("//button[normalize-space()='Download File']").click();
  await page.waitForTimeout(2000);
  const download = await waitForDownloadEvent;

  await download.saveAs('./' + download.suggestedFilename());
});

test('Downloading Images', async ({ page }) => {
  await page.goto('https://file-examples.com/#google_vignette');
  await page.setViewportSize({ width: 1920, height: 1040 });

  const sections = await page.locator('div.feature-item').all();

  console.log('Total sections:', sections.length);
  await page
    .locator("//h3[normalize-space()='Other files']")
    .scrollIntoViewIfNeeded();

  for (const section of sections) {
    const fileTitle = await section.locator('h3').textContent();

    if (fileTitle.includes('Other files')) {
      await section.locator("a:has-text('Browse')").click();
      break;
    }
  }
  let waitForDownload = page.waitForEvent('download');
  // await page.$$("//a[@href='https://file-examples.com/index.php/sample-images-download/sample-jpg-download/']").click();

  await page.locator("//a[normalize-space()='Download sample CSV file']").click();

  const download = await waitForDownload;
  await download.saveAs('PlaywrightAutomation/DownloadedFiles' + download.suggestedFilename());
});
