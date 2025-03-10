import { test, expect } from '@playwright/test';

test('Verify User Profile Page', async ({ page }) => {
    await page.goto('https://mdbootstrap.com/docs/standard/extended/profiles/');
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000);

    const  title = await page.getByText('User profile page template');
    await title.scrollIntoViewIfNeeded()

    // User details to validate
    const userDetails = [
        { locator: "//h5[normalize-space()='John Smith']", text: 'John Smith' },
        { locator: "//p[@class='text-muted mb-1']", text: 'Full Stack Developer' },
        {locator: "div[class='card mb-4'] p[class='text-muted mb-4']", text: 'Bay Area, San Francisco, CA',},
        { locator: "//p[normalize-space()='Johnatan Smith']", text: 'Johnatan Smith' },
        {locator: "//p[normalize-space()='example@example.com']", text: 'example@example.com',},
        { locator: "//p[normalize-space()='(097) 234-5678']", text: '(097) 234-5678' },
        { locator: "//p[normalize-space()='(098) 765-4321']", text: '(098) 765-4321' },
        {locator: "//p[contains(@class,'text-muted mb-0')][normalize-space()='Bay Area, San Francisco, CA']", text: 'Bay Area, San Francisco, CA',},
    ];

    // Loop through each user detail and validate
    for (const detail of userDetails) {
        const element = await page.locator(detail.locator);
        await expect(element).toHaveText(detail.text);
        console.log(detail.text);
    }

    await page.waitForTimeout(2000);
    console.log('User profile page validation passed');
});