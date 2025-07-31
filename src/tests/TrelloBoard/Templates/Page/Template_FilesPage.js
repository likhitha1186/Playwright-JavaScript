import { HandlingTemplateElements, HandlingVisibilityElements } from '../FeatureFiles/MultipleElements.js';

export class TemplatesPage {
  constructor(page) {
    this.page = page;
    this.projectManagementSelector = this.page.locator("//span[normalize-space()='Project management']",);
    this.findTemplates = this.page.locator("//div[@class='MR6FSx_xyuFObZ css-1vrwmt7-control']",);
    this.templateSelector = "//div[@class='ZPNPKvXkXoTQdp']//li";
    this.useTemplate= "//div[@class='lD77IIJevxUsk5']//button[2]";
    this.createButton = this.page.getByTestId('create-board-submit-button');
    this.listsSelectors = "//li[@data-testid='list-wrapper']";
    this.visibiltyButton = "//div[@data-testid='create-board-select-visibility-select--indicators-container']";
    this.visibilitySelector = "//div[@class='tONJvKrAZwZgEq']";
  }

  async OneOnOneMeetingAgenda(templateName) {
    await this.page.getByRole('link', { name: 'Team management' }).click();
    await this.findTemplates.click()
    await this.findTemplates.type(templateName);
    await this.page.getByRole('option', { name: '1-on-1 Meeting Agenda by' }).locator('div').first().click();
    await this.useTemplate.click();
    //await this.page.getByRole('button', { name: 'Use template' }).click();
    await this.page.getByRole('button', { name: 'Create', exact: true }).click();
  }

  async OneOnOneMeetingAgenda1(templateName) {
    await this.page.waitForTimeout(2000);
    const templates = await this.page.$$(this.templateSelector);
    await HandlingTemplateElements(templates, templateName);
    await this.page.locator(this.visibiltyButton).click();
    await this.page.waitForSelector(this.visibilitySelector, {
      state: 'visible',
    });
    const option = await this.page.$$(this.visibilitySelector);
    await HandlingVisibilityElements(option, 'Private');
    await this.createButton.click();
  }
  async agileTemplate(templateName) {
    await this.page.waitForTimeout(2000);
    const templates = await this.page.$$(this.templateSelector);
    await HandlingTemplateElements(templates, templateName);
    await this.createButton.click();
  }
  async companyOverview(templateName) {
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
  async GoToMarketStrategyTemplate(templateName) {
    await this.page.waitForTimeout(2000);
    const templates = await this.page.$$(this.templateSelector);
    await HandlingTemplateElements(templates, templateName);
    await this.createButton.click();
  }
  async KanbanTemplate(templateName) {
    await this.page.waitForTimeout(2000);
    const templates = await this.page.$$(this.templateSelector);
    await HandlingTemplateElements(templates, templateName);
    await this.createButton.click();
  }
  async Mise_En_PlacePersonalProductivitySystem(templateName) {
    await this.page.waitForTimeout(2000);
    const templates = await this.page.$$(this.templateSelector);
    await HandlingTemplateElements(templates, templateName);
    await this.createButton.click();
  }
  async ProjectManagement(templateName) {
    await this.page.waitForTimeout(2000);
    const templates = await this.page.$$(this.templateSelector);
    await HandlingTemplateElements(templates, templateName);
    await this.createButton.click();
  }
  async RemoteTeamMeetings(templateName) {
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
  async TeachingWeeklyPlanning(templateName) {
    await this.page.waitForTimeout(2000);
    const templates = await this.page.$$(this.templateSelector);
    await HandlingTemplateElements(templates, templateName);
    await this.createButton.click();
  }
}