export class Login {

    constructor(page) {
        this.page = page;
    }

  async login(username, password){
      await this.page.goto('https://trello.com/homepage');
      await this.page.setViewportSize({ width: 1920, height: 1040 });
      await this.page.getByText('Log in').click();
      await this.page.locator('#username').fill(username);
      await this.page.locator('button[type="submit"]', { hasText: 'Continue' }).click();
      await this.page.locator('#password').fill(password);
      await this.page.locator('button[type="submit"]', { hasText: 'Log In' }).click();
  }

  async selectWorkspace(){
    console.log("Waiting for workspace dropdown...");
    await this.page.waitForSelector("//span[normalize-space()='Workspaces']", { timeout: 10000 });

    console.log("Workspace dropdown found, clicking...");
    await this.page.locator("//span[normalize-space()='Workspaces']").click();

    console.log("Waiting for workspace list to appear...");
    await this.page.waitForSelector("//ul[@data-testid='workspace-switcher-popover']//ul[1]//li[1]//a[1]", { timeout: 10000 });

    console.log("Clicking first workspace...");
    await this.page.locator("//ul[@data-testid='workspace-switcher-popover']//ul[1]//li[1]//a[1]").click();
  }


  async selectTemplates(){
        await this.page.getByTestId('templates-menu').click();
        await this.page.waitForTimeout(2000)
  }
}
