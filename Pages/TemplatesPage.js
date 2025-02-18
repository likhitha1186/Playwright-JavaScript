import { HandlingTemplateElements } from "../HelperFiles/HandlingMultipleElement.spec.js"

export class TemplatesPage {
    constructor(page) {
        this.page = page;
    }
    async agileTemplate(templateName) {
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$("//div[@class='JsF1KJCvp3JW_5']//li");
        await HandlingTemplateElements(templates, templateName);
        await this.page.getByTestId('create-board-submit-button').click();
    }
    async DesignHuddle(templateName) {
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$("//div[@class='JsF1KJCvp3JW_5']//li");
        await HandlingTemplateElements(templates, templateName);
        await this.page.getByTestId('create-board-submit-button').click();
    }

    async KanbanTemplate(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$("//div[@class='JsF1KJCvp3JW_5']//li");
        await HandlingTemplateElements(templates, templateName);
        await this.page.getByTestId('create-board-submit-button').click();
    }

    async OneOnOneMeetingAgenda(templateName){
        await this.page.waitForTimeout(2000);
        const templates = await this.page.$$("//div[@class='JsF1KJCvp3JW_5']//li");
        await HandlingTemplateElements(templates, templateName);
        await this.page.getByTestId('create-board-submit-button').click();
    }
}