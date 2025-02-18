import { expect } from '@playwright/test';

export class Login {
    constructor(page) {
        this.page = page;
        this.url = 'https://trello.com/homepage';
        this.loginButton = this.page.getByText('Log in');
        this.usernameField = this.page.locator('#username');
        this.continueButton = this.page.locator('button[type="submit"]', { hasText: 'Continue' });
        this.passwordField = this.page.locator('#password');
        this.submitButton = this.page.locator('button[type="submit"]', { hasText: 'Log In' });
        this.workspaceButton = this.page.locator("button[title='Workspaces'] span[class='kpv7OitsgQTIxo']");
        this.templatesMenu = this.page.getByTestId('templates-menu');
    }

    async login(username, password) {
        await this.page.goto(this.url);
        await this.page.setViewportSize({ width: 1920, height: 1040 });
        await this.loginButton.click();
        await this.usernameField.fill(username);
        await this.continueButton.click();
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }

    async selectWorkspace() {
        await this.workspaceButton.click();
        await this.page.getByText("likhitha's workspace").click();
    }

    async selectTemplates() {
        await this.templatesMenu.click();
        await this.page.waitForTimeout(2000);
    }
}
