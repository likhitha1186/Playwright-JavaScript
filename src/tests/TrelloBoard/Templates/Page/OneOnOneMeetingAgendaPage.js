import {  HandlingCardElements, HandlingLabelsElements } from '../FeatureFiles/MultipleElements.js';


export class OneOnOneMeetingAgendaTemplate {
    constructor(page) {
        this.page = page;
        this.boardTitle = this.page.locator("//h1[contains(text(), '1-on-1 Meeting Agenda')]");
        this.lists = this.page.locator("//li[@data-testid='list-wrapper']");

        this.infoList = this.page.locator("//li[@data-testid='list-wrapper'][1]//li");
        this.teamMemberTopicsList = this.page.locator("//li[@data-testid='list-wrapper'][2]//li");
        this.managerTopicsList = this.page.locator("//li[@data-testid='list-wrapper'][3]//li");
        this.goalsList = this.page.locator("//li[@data-testid='list-wrapper'][4]//li");
        this.actionsList = this.page.locator("//li[@data-testid='list-wrapper'][5]//li");
        this.doneList = this.page.locator("//li[@data-testid='list-wrapper'][6]//li");
        this.newList = this.page.locator("//div[@data-testid='board-canvas']//div[@data-testid='list-composer-button-container']");

        this.addCardToInfoList = this.page.locator("//ol[@id='board']/li[1]/div[1]/div[3]/button[1]");
        this.addCardToTeamMemberTopicsList = this.page.locator("//ol[@id='board']/li[2]/div[1]/div[3]/button[1]");
        this.addCardToManagerTopicsList = this.page.locator("//ol[@id='board']/li[3]/div[1]/div[3]/button[1]");
        this.addCardToGoalsList = this.page.locator("//ol[@id='board']/li[4]/div[1]/div[3]/button[1]");
        this.addCardToActionsList = this.page.locator("//ol[@id='board']/li[5]/div[1]/div[3]/button[1]");
        this.addCardToDoneList = this.page.locator("//ol[@id='board']/li[6]/div[1]/div[3]/button[1]");

        this.cardTitle = this.page.locator("//h1[contains(text(), 'How to use this board')]");
        this.cardTitleCheckbox = this .page.locator("//div[@class='OLWg_SEGDvY_pO']//div[@class='yRwdodao8tIG_y']");
        this.cardDropdown = this.page.locator("//span[@class='wl2C35O7dKV1wx']");
        this.boardDropdown = this.page.locator("//div[@data-testid='move-card-popover-select-board-destination']//span[@class = 'css-17zzl5o']");
        this.watchButton = this.page.locator("//button[contains(text(), 'Watch')]")
        this.editButton = this.page.locator("//button[contains(text(), 'Edit')]");
        this.joinButton = this.page.locator("//button[contains(text(), 'Join')]");
        this.leaveButton = this.page.locator("//button[contains(text(), 'Leave')]");
        this.membersButton = this.page.locator("//button[contains(text(), 'Members')]");
        this.labelsButton = this.page.locator("//button[contains(text(), 'Labels')]");
        this.checklistButton = this.page.locator("//button[contains(text(), 'Checklist')]");
        this.datesButton = this.page.locator("//button[contains(text(), 'Dates')]");
        this.attachmentButton = this.page.locator("//button[contains(text(), 'Attachment')]");
        this.customFieldsButton = this.page.locator("//button[contains(text(), 'Custom Fields')]");
        this.confluenceButton = this.page.locator("//button[contains(text(), 'Confluence')]");
        this.addPowerUpsButton = this.page.locator("//button[contains(text(), 'Add Power-Ups')]");
        this.addButton = this.page.locator("//button[contains(text(), 'Add button')]");
        this.moveButton = this.page.locator("//button[contains(text(), 'Move')]");
        this.copyButton = this.page.locator("//button[contains(text(), 'Copy')]");
        this.mirrorButton = this.page.locator("//button[contains(text(), 'Mirror')]");
        this.makeTemplateButton = this.page.locator("//button[contains(text(), 'Make template')]");
        this.archiveButton = this.page.locator("//button[contains(text(), 'Archive')]");
        this.shareButton = this.page.locator("//button[contains(text(), 'Share')]");
        this.addAttachment = this.page.locator("//button[normalize-space()='Add']");
        this.fileAttachment = this.page.locator("//span[contains(text(), 'ScratchPaper.jpg')]");
        this.commentBox = this.page.locator("//textarea[@placeholder='Write a comment…']");
        this.hideDetailsButton = this.page.locator("//button[normalize-space()='Show details']");
        this.closeCardButton = this.page.locator("//button[@aria-label='Close dialog']//span[@data-testid='CloseIcon']")
        this.myBoards = this.page.locator("//div[@class='jv7QDCKI8FPToj']//li");

    }
    async addCardToInfoTopics(cardname) {
        await this.addCardToInfoList.click();
        await this.page.getByPlaceholder('Enter a title or paste a link').fill(cardname);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async addCardToTeamMemberTopics(cardname) {
        await this.addCardToTeamMemberTopicsList.click();
        await this.page.getByPlaceholder('Enter a title or paste a link').fill(cardname);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async addCardToManagerTopics(cardname) {
        await this.addCardToManagerTopicsList.click();
        await this.page.getByPlaceholder('Enter a title or paste a link').fill(cardname);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async addCardToGoals(cardname) {
        await this.addCardToGoalsList.click();
        await this.page.getByPlaceholder('Enter a title or paste a link').fill(cardname);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async addCardToActions(cardname) {
        await this.addCardToActionsList.click();
        await this.page.getByPlaceholder('Enter a title or paste a link').fill(cardname);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async addCardToDone(cardname) {
        await this.addCardToDoneList.click();
        await this.page.getByPlaceholder('Enter a title or paste a link').fill(cardname);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async addMembersAction(){
        await this.membersButton.click()
      await this.page.getByLabel('Search members').fill('Likhitha');
      await this.page.keyboard.press('Enter');
      await this.page.locator("//button[@aria-label='Close popover']").click();
    }

    async addLabelsAction(labelName){
        await this.labelsButton.click();
        const CreateNewLabel = await this.page.getByText('Create a new label');
        const TitleField = await this.page.locator("//div[@class='q2PzD_Dkq1FVX3 pt-0']//input[@type='text']")
        const CreateButton = await this.page.locator("//button[contains(text(),'Create')]")
        const allLabels= await this.page.locator("//ul[@class='AEgIEBHcUVGEym']//li");
        await HandlingLabelsElements(allLabels, labelName, CreateNewLabel, TitleField, CreateButton)
        await this.page.getByLabel("Close popover").click()
    }

    async addCheckList(addChecklistItems){
        await this.checklistButton.click();
        for (const item of addChecklistItems) {
            await this.page.locator("//button[normalize-space()='Add']").click();
            await this.page.getByLabel('Add an item').fill(item);
            await this.page.keyboard.press('Enter');
            await this.page.waitForTimeout(1000);
        }
    }

    async checkTheAddedCheckList() {
        const options = await this.page.$$("//ul[@data-testid='checklist-items']//div[@class='DqgZ76in2cc5Jp']//*[name()='svg']");
        await options[0].click();
        await this.page.waitForTimeout(1000);
    }

    async addDates(){
        await this.datesButton.click();
        await this.page.waitForTimeout(5000);
        await this.datesButton.click();
        await this.page.getByTestId('card-back-due-date-button').click();
        await this.page.getByTestId('date-range-picker-with-ads').locator('svg').nth(3).uncheck();
        await this.page.getByTestId('date-range-picker-with-ads').locator('svg').nth(2).check();
        await this.page.getByRole('button', { name: '4, Tuesday March 2025' }).click();
        await this.page.getByTestId('date-range-picker-with-ads').locator('svg').nth(3).check();
        await this.page.getByRole('button', { name: '3, Thursday April 2025' }).click();
        this.page.locator("//div[@class='ZLkHQZu7HZZj5h']//button[1]").click()
    }

    // selecting newly created card
    async clickNewCardInInfoList(cardName) {
        await HandlingCardElements(this.infoList, cardName, this.page)
        await this.page.waitForTimeout(5000)
    }

    //after selecting newly created card
    async performActionOnNewCard(cardName, labelName, addChecklistItems){
        await this.clickNewCardInInfoList(cardName);
        //await this.performMoveCardAction();
        await this.cardTitleCheckbox.click();
        await this.page.waitForTimeout(2000)
        await this.watchButton.click();
        await this.page.waitForTimeout(2000)
        await this.joinButton.click();
        await this.page.waitForTimeout(2000)
        await this.addMembersAction();
        await this.addLabelsAction(labelName);
        await this.addCheckList(addChecklistItems)
        await this.checkTheAddedCheckList()
      //  await this.addDates()
    }
    async closeOpenedCard(){
      await this.closeCardButton.click()
    }

    // selecting already existing card
    async clickOldCardInInfoList(cardIndex) {
        await this.infoList.nth(cardIndex).click();
        await this.page.waitForTimeout(2000);
    }

    //after selecting already existing card
    async performMoveCardAction(){
        await this.cardDropdown.click();
        await this.boardDropdown.click();
        const options = await this.page.$$("//div[@role='option']//li");
        await options[0].click()
        await this.page.getByTestId('move-card-popover-move-button').click()
    }

    async performActionOnOldCard(cardIndex){
        await this.clickOldCardInInfoList(cardIndex);
        await this.cardTitleCheckbox.click();
        await this.performMoveCardAction();
    }

    async deleteCreatedBoard(templateName){
        await this.page.reload()
        const latestBoard = this.page.locator(`//a[contains(@title, '${templateName}')]`);
        await latestBoard.click();
        const boardContainer = latestBoard.locator("xpath=ancestor::li");    // Find the parent container of the board and then locate the button inside it
        const deleteButton = boardContainer.locator("button[aria-label='Board actions menu']").last();
        await deleteButton.click();
        await this.page.waitForTimeout(2000)
        await this.page.getByRole('button', { name: 'Close board' }).click();
        await this.page.getByTestId('popover-close-board-confirm').click();
    }
}
