import { test } from '@playwright/test';

test('Wait For event', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://example.com', { waitUntil: 'networkidle' });

    // Log all outgoing requests for debugging
    page.on('request', request => console.log('📡 Request made:', request.url()));

    // Try different selectors
    await page.waitForSelector("//button[contains(text(),'trigger request')]", { timeout: 10000 });

    // Ensure the button is visible
    await page.waitForTimeout(2000); // Wait in case of dynamic loading

    // Wait for the request
    const requestPromise = page.waitForRequest(request => request.url().includes('/resource'));

    // Click the button
    await page.locator("//button[contains(text(),'trigger request')]").click();

    // Capture the request
    const request = await requestPromise;

    // Log request details
    console.log(`✅ Request Captured: ${request.url()}`);
    console.log(`🔹 Method: ${request.method()}`);
    console.log(`🔹 Headers:`, request.headers());
});
