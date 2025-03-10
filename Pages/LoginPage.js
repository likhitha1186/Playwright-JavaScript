export class Loginpage {

    constructor(page) {
        this.page = page;
        this.loginbutton1= this.page.getByText('Log in');
        this.emailid = this.page.locator('#username');
        this.rembermecheckbox = this.page.locator('//input[@type="checkbox"]');
        this.continuebutton = this.page.getByRole("button", { name: "Continue" });
        this.password = this.page.locator('#password');
        this.loginbutton = this.page.getByRole("button", { name: "Log In" });
        this.workspaces = this.page.getByRole("button", { name: "Workspaces" });
        this.yourworkspace = this.page.locator('.TaNgu9ncpvX1uL');
        this.Practice = this.page.locator("//div[contains(text(),'Practice')]");
        this.addacard = this.page.locator("//li[@data-testid='list-wrapper'][1]").getByRole("button", { name: "Add a card" });
        this.ToDo = this.page.locator("(//a[@class='NdQKKfeqJDDdX3'][normalize-space()='TicketNo1'])[3]");
        this.Doing = this.page.locator("(//button[contains(@type,'button')][normalize-space()='Add a card'])[1]");
    }

    async gotoUrl() {
        await this.page.goto("https://trello.com/homepage");
    }

    async getloginbutton1() {
        await this.loginbutton1.click();
    }

    async getEmailid(email) {
        await this.emailid.fill(email);
    }

    async getRemberMeCheckbox() {
        await this.rembermecheckbox.check();
    }

    async getcontinuebutton() {
        await this.continuebutton.click();
    }

    async getPassword(password) {
        await this.password.fill(password);
    }

    async getLoginbutton() {
        await this.loginbutton.click();
    }

    async getWorkspaces() {
        await this.workspaces.click();
    }

    async getyourworkspace() {
        await this.yourworkspace.click();
    }

    async getTestplaywright() {
        await this.Practice.click();
    }

    async getAddacard() {
        await this.addacard.fill();
    }

    // Method to press Enter
    async pressEnter() {
        await this.page.keyboard.press("Enter");
    }
}
