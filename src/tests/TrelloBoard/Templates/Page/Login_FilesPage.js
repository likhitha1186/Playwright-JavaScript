import { authenticator } from 'otplib';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('https://trello.com/homepage');
    await this.page.setViewportSize({ width: 1920, height: 1040 });
    await this.page.getByText('Log in').click();
    await this.page.locator('#username-uid1').fill(username);
    await this.page.locator('button[type="submit"]', { hasText: 'Continue' }).click();
    await this.page.locator('#password').fill(password);
    await this.page.locator('button[type="submit"]', { hasText: 'Log in' }).click();
    const otp = authenticator.generate(process.env.SECRETOTP);
    await this.page.locator('#two-step-verification-otp-code-input').fill(otp);
  }

  async selectWorkspace() {
    await this.page.locator("button[data-testid='workspace-switcher']").click();
    await this.page.getByText("likhitha's workspace").click();
    await this.page.reload();
    await this.deleteTemplates()
  }

  async deleteTemplates() {
    const showMore = this.page.getByText("Show more");
    if (await showMore.isVisible()) {
      await showMore.click();
    }

    await this.page.waitForSelector("//div[@class='VAeDK5VtVrr0pK']//li");

    const myBoards = this.page.locator("//div[@class='VAeDK5VtVrr0pK']//li");
    const boardCount = await myBoards.count();
    console.log("Board count:", boardCount);

    if (boardCount > 1) {
      for (let i = 1; i < boardCount; i++) {
        const board = myBoards.nth(i);
        await board.click();

        const deleteButton = this.page.locator("button[aria-label='Board actions menu']").nth(i);
        await deleteButton.click();
        await this.page.waitForTimeout(2000);

        await this.page.getByRole('button', { name: 'Close board' }).click();
        await this.page.getByTestId('popover-close-board-confirm').click();

        await this.page.waitForTimeout(2000);
      }
    }
  }


  async selectTemplates() {
    await this.page.getByTestId('templates-menu').click();
    await this.page.waitForTimeout(2000);
  }
}
