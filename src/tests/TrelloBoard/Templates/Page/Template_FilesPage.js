import { HandlingTemplateElements } from "../FeatureFiles/MultipleElements.js"

export class TemplatesPage {
    constructor(page) {
        this.page = page;
        this.templateSelector = "//div[@class='JsF1KJCvp3JW_5']//li";
        this.createButton = this.page.getByTestId('create-board-submit-button');
        this.listsSelectors = "//li[@data-testid='list-wrapper']";
    }

    async OneOnOneMeetingAgenda(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async agileTemplate(templateName) {
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async companyOverview(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async DesignHuddle(templateName) {
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async GoToMarketStrategyTemplate(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async KanbanTemplate(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async Mise_En_PlacePersonalProductivitySystem(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async ProjectManagement(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async RemoteTeamMeetings(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async SimpleProjectBoard(templateName) {
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
    async TeachingWeeklyPlanning(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$(this.templateSelector);
        await HandlingTemplateElements(templates, templateName);
        await this.createButton.click();
    }
}