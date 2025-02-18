export async function OneOnOneMeetingAgenda(page) {
        const boardTitle = page.locator("//h1[contains(text(), '1-on-1 Meeting Agenda')]");
        const lists = page.$$("//li[@data-testid='list-wrapper']");


        const infoList = page.$$("//li[@data-testid='list-wrapper'][1]//li");
        const teamMemberTopicsList = page.$$("//li[@data-testid='list-wrapper'][2]//li");
        const managerTopicsList = page.$$("//li[@data-testid='list-wrapper'][3]//li");
        const goalsList = page.$$("//li[@data-testid='list-wrapper'][4]//li");
        const actionsList = page.$$("//li[@data-testid='list-wrapper'][5]//li");
        const doneList = page.$$("//li[@data-testid='list-wrapper'][6]//li");


        const addCardToTeamMemberTopics = page.locator("//li[@data-testid='list-wrapper'][1]//li").last();
        const addCardToManagerTopics = page.locator("//li[@data-testid='list-wrapper'][2]//li").last();
        const addCardToGoals = page.locator("//li[@data-testid='list-wrapper'][3]//li").last();
        const addCardToActions = page.locator("//li[@data-testid='list-wrapper'][4]//li").last();
        const addCardToDone = page.locator("//li[@data-testid='list-wrapper'][5]//li").last();

        return {
            boardTitle,
            lists,
            infoList,
            teamMemberTopicsList,
            managerTopicsList,
            goalsList,
            actionsList,
            doneList,
            addCardToTeamMemberTopics,
            addCardToManagerTopics,
            addCardToGoals,
            addCardToActions,
            addCardToDone
        };
    }







