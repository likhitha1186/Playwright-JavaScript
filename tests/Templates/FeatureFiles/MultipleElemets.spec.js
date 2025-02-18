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
    for (let card of allCards) {
        const cardTitle = await card.textContent();
        if (cardTitle === cardName) {
            await  card.click()
            await page.waitForTimeout(1000)
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
