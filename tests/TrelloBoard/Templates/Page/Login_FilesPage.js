import { authenticator } from 'otplib';

export class LoginPage {

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
        await this.page.locator('button[type="submit"]', { hasText: 'Log in' }).click();
        const otp = authenticator.generate(process.env.SECRETOTP)
        await this.page.locator('#two-step-verification-otp-code-input').fill(otp);
    }

    async selectWorkspace(){
        await this.page.locator("button[title='Workspaces'] span[class='kpv7OitsgQTIxo']").click();
        await this.page.getByText("likhitha's workspace").click();
    }

    async selectTemplates(){
        await this.page.getByTestId('templates-menu').click();
        await this.page.waitForTimeout(2000)
    }
}
