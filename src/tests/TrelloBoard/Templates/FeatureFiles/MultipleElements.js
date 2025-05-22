export async function HandlingBoardElements(allBoards, boardName) {
    for (let board of allBoards) {
        const boardTitle = await board.textContent();
        if (boardTitle === boardName) {
            await  boardTitle.click()
            return board;
        }
    }
    return null;
}

export async function HandlingBoardLength(BoardList) {
    const boardTitles = [];
    for (let board of BoardList) {
        const boardTitle = await board.textContent();
        boardTitles.push(boardTitle);
    }
    return boardTitles;
}

export async function HandlingCardElements(allCards, cardName, page) {
    const elements = await allCards.all();
    for (let card of elements) {
        const cardTitle = await card.textContent();
        if (cardTitle === cardName) {
            await page.waitForTimeout(2000);
            await card.click();
            await page.waitForTimeout(2000);
            return card;
        }
    }
    return null;
}

export async function HandlingTemplateElements(templates, targetTitle) {
    for (let temp of templates) {
        const tempTitle = await temp.textContent();
        if (tempTitle === targetTitle) {
            await temp.scrollIntoViewIfNeeded();
            await temp.click();
            return temp;
        }
    }
    return null;
}

export async function HandlingVisibilityElements(visibilityList, target) {
    for (let temp of visibilityList) {
        const VisibilityTitle = await temp.textContent();
        if (VisibilityTitle && VisibilityTitle.trim().startsWith(target)) {
            await temp.click();
            return temp;
        }
    }
    throw new Error(`Visibility option "${target}" not found.`);
}

export async  function HandlingLabelsElements(allLabels, targetLabel, CreateNewLabel, TitleField, CreateButton){
    for (const label of await allLabels.all()) {
        if ((await label.textContent()) === targetLabel) {
            await label.click();
            return;
        }
    }
    await CreateNewLabel.click();
    await TitleField.fill(targetLabel);
    await CreateButton.click();
}