import {test, expect} from '@playwright/test'

test('Check checkbox for expected username', async ({ page }) => {
  await page.goto('file:///C:/Users/likhithap/Downloads/New%20Text%20Document.html'); // Change this to your actual file path

  const expectedUser = "Bob Smith"; // Change this to the username you want to check

  // Locate all table rows
  const rows = await page.locator('tbody tr');

  // Loop through each row
  for (let i = 0; i < await rows.count(); i++) {
    const nameCell = rows.nth(i).locator('td:nth-child(2)'); // Get the Name column
    const nameText = await nameCell.innerText();

    if (nameText.trim() === expectedUser) {
      // Click the checkbox in the same row
      await rows.nth(i).locator('.select-checkbox').check();
      console.log(`Checked checkbox for user: ${expectedUser}`);
      break; // Exit loop after finding the user
    }
  }

  // Verify the checkbox is checked
  const checkbox = await page.locator(`input.select-checkbox[name="userSelect"]:checked`);
  expect(await checkbox.count()).toBe(1);
  await page.waitForTimeout(2000)
});