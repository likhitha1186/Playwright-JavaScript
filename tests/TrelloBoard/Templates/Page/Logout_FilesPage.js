export class LogoutPage {
  constructor(page) {
    this.page = page;
  }

   async logout() {
    await this.page.locator("//div[@data-testid='header-member-menu-avatar']").click();
    await this.page.locator("//button[@data-testid='account-menu-logout']").click();
    await this.page.locator("//button[@data-testid='logout-button']").click();
   }
}
