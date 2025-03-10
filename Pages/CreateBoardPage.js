import { expect } from '@playwright/test';
import {HandlingBoardElements, HandlingCardElements, HandlingBoardLength} from "../HelperFiles/HandlingMultipleElement.js";

export class Board {
  constructor(page) {
    this.page = page;
  }

  async createBoard(Boardname) {
    await this.page.getByLabel('Add board').click();
    await this.page.getByTestId('create-board-title-input').fill(Boardname);
    await this.page.getByTestId('create-board-submit-button').click();
    return Boardname;
  }

  async countBoard(){
      const BoardList = await this.page.$$("//div[@data-testid='workspace-boards-and-views-lists']//div[3]//li");
      return await  HandlingBoardLength(BoardList);

  }

  async findBoardElement(boardName) {
    const allBoards = await this.page.$$("//div[@data-testid='workspace-boards-and-views-lists']//div[3]//li");
    return await HandlingBoardElements(allBoards, boardName);
  }

  async addList(Listname){
    await this.page.getByPlaceholder('Enter list name…').fill(Listname);
    await this.page.getByTestId('list-composer-add-list-button').click();
  }

  async addCard(Cardname) {
    const addCardButton = this.page.locator("//li[@data-testid='list-wrapper'][1]").getByTestId('list-add-card-button');
    const textArea = this.page.getByTestId('list-card-composer-textarea');
    await this.page.waitForTimeout(2000)
    if ((await addCardButton.isVisible()))
       await addCardButton.click();
    await textArea.fill(Cardname);
    await this.page.getByTestId('list-card-composer-add-card-button').click();

  }
 async openCard(cardName){
    const allCards= await this.page.$$("//li[@data-testid='list-wrapper'][1]//li");
    return await HandlingCardElements(allCards, cardName, this.page);
  }

  async performAction(cardName){
      const inList = await this.page.locator("//span[@class='wl2C35O7dKV1wx']").click();
      await this.page.locator("//div[@data-testid='move-card-popover-select-board-destination']//span[@class = 'css-17zzl5o']").click();
      const options = await this.page.$$("//div[@role='option']//li");
      await options[0].click();
      await this.page.getByTestId('move-card-popover-move-button').click()
  }

  async deleteBoard(){
      await this.page.getByTestId('open-boards-link').click();
      await this.page.waitForTimeout(2000);
      await this.page.locator("//button[normalize-space()='View closed boards']").click();
      await this.page.waitForTimeout(2000);

      const  deleteButtons = await this.page.$$('//button[contains(text(), "Delete")]');
      console.log(`Total  closed boards: ${deleteButtons.length}`)
      for (const button of deleteButtons) {
          await button.click();
          const confirmButton = this.page.locator("//button[@data-testid='close-board-delete-board-confirm-button']");
          await confirmButton.click();
          console.log('Confirmed deletion.');
      }
  }
}
