import { test, expect } from '@playwright/test';

test('Verify User Profile Details', async ({ page }) => {
    await page.goto('https://mdbootstrap.com/docs/standard/extended/profiles/');
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000);

    const title = await page.getByText('User profile page template');
    await title.scrollIntoViewIfNeeded();

    await page.waitForTimeout(2000)
    // User details to validate
    const userDetails = [
        { locator: "//h5[normalize-space()='John Smith']", text: 'John Smith' },
        { locator: "//p[@class='text-muted mb-1']", text: 'Full Stack Developer' },
        { label: 'Full Name', locator: "//p[normalize-space()='Johnatan Smith']" },
        { label: 'Email', locator: "//p[normalize-space()='example@example.com']" },
        { label: 'Phone', locator: "//p[normalize-space()='(097) 234-5678']" },
        { label: 'Mobile', locator: "//p[normalize-space()='(098) 765-4321']" },
        { label: 'Address', locator: "//p[contains(@class,'text-muted mb-0')][normalize-space()='Bay Area, San Francisco, CA']" },
    ];

// Loop through each user detail and validate
    for (const detail of userDetails) {
        const element = await page.locator(detail.locator);

        if (detail.text) {
            await expect(element).toHaveText(detail.text);
            console.log(detail.text);
        } else {
            const textContent = await element.textContent();
            console.log(`${detail.label}: ${textContent}`);
        }
    }
    console.log('User profile page validation passed');
});