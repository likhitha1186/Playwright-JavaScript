import { authenticator } from 'otplib';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('https://trello.com/homepage');
    await this.page.setViewportSize({ width: 1920, height: 1040 });
    await this.page.getByText('Log in').click();
    await this.page.locator('#username').fill(username);
    await this.page.locator('button[type="submit"]', { hasText: 'Continue' }).click();
    await this.page.locator('#password').fill(password);
    await this.page.locator('button[type="submit"]', { hasText: 'Log in' }).click();
    const otp = authenticator.generate(process.env.SECRETOTP);
    await this.page.locator('#two-step-verification-otp-code-input').fill(otp);
  }

  async selectWorkspace() {
    await this.page.locator("button[title='Workspaces'] span[class='kpv7OitsgQTIxo']").click();
    await this.page.getByText("likhitha's workspace").click();
    await this.deleteTemplates()
  }

  async deleteTemplates() {
    const myBoards = this.page.locator("//div[@class='jv7QDCKI8FPToj']//li");
    const allBoards = await myBoards.all();
    if(allBoards.length > 1) {
      for (let i = 1; i < allBoards.length; i++) {
        const board = allBoards[i];
        await board.hover();
        await board.click();
        const deleteButton = myBoards.locator("button[aria-label='Board actions menu']").last();
        await deleteButton.click();
        await this.page.waitForTimeout(2000)
        await this.page.getByRole('button', { name: 'Close board' }).click();
        await this.page.getByTestId('popover-close-board-confirm').click();
      }
    }
  }

  async selectTemplates() {
    await this.page.getByTestId('templates-menu').click();
    await this.page.waitForTimeout(2000);
  }
}
