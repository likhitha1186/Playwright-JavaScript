import { expect } from '@playwright/test';
import { HandlingBoardElements, HandlingCardElements, HandlingBoardLength } from "../FeatureFiles/MultipleElemets.spec.js";

export class Board {
    constructor(page) {
        this.page = page;
        this.addBoardButton = this.page.getByLabel('Add board');
        this.boardTitleInput = this.page.getByTestId('create-board-title-input');
        this.createBoardButton = this.page.getByTestId('create-board-submit-button');
        this.boardListSelector = "//div[@data-testid='workspace-boards-and-views-lists']//div[3]//li";
        this.listNameInput = this.page.getByPlaceholder('Enter list name…');
        this.addListButton = this.page.getByTestId('list-composer-add-list-button');
        this.addCardButton = this.page.locator("//li[@data-testid='list-wrapper'][1]").getByTestId('list-add-card-button');
        this.cardComposerInput = this.page.getByTestId('list-card-composer-textarea');
        this.addCardSubmitButton = this.page.getByTestId('list-card-composer-add-card-button');
        this.cardSelector = "//li[@data-testid='list-wrapper'][1]//li";
        this.listActionsButton = this.page.locator("//span[@class='wl2C35O7dKV1wx']");
        this.moveCardSelectBoard = this.page.locator("//div[@data-testid='move-card-popover-select-board-destination']//span[@class = 'css-17zzl5o']");
        this.moveCardOptions = "//div[@role='option']//li";
        this.moveCardButton = this.page.getByTestId('move-card-popover-move-button');
    }

    async createBoard(Boardname) {
        await this.addBoardButton.click();
        await this.boardTitleInput.fill(Boardname);
        await this.createBoardButton.click();
        return Boardname;
    }

    async countBoard() {
        const BoardList = await this.page.$$(this.boardListSelector);
        return await HandlingBoardLength(BoardList);
    }

    async findBoardElement(boardName) {
        const allBoards = await this.page.$$(this.boardListSelector);
        return await HandlingBoardElements(allBoards, boardName);
    }

    async addList(Listname) {
        await this.listNameInput.fill(Listname);
        await this.addListButton.click();
    }

    async addCard(Cardname) {
        await this.page.waitForTimeout(2000);
        if (await this.addCardButton.isVisible()) {
            await this.addCardButton.click();
        }
        await this.cardComposerInput.fill(Cardname);
        await this.addCardSubmitButton.click();
    }

    async openCard(cardName) {
        const allCards = await this.page.$$(this.cardSelector);
        return await HandlingCardElements(allCards, cardName, this.page);
    }

    async performAction() {
        await this.listActionsButton.click();
        await this.moveCardSelectBoard.click();
        const options = await this.page.$$(this.moveCardOptions);
        await options[0].click();
        await this.moveCardButton.click();
    }
}
