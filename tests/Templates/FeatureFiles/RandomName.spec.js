export function generateRandomBoardName() {
    const adjectives = ["Agile", "Kanban", "Scrum", "Project", "Daily", "Weekly", "Sprint", "Design", "Development", "Marketing", "Sales",
        "Support", "Personal", "Team", "Idea", "Task", "Meeting", "Planning", "Review", "Retrospective",
    ];

    const nouns = ["Board", "Project", "Tasks", "Goals", "Ideas", "Meetings", "Sprints", "Workflow", "Roadmap", "Planning","Review","Retrospective",];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}
export function generateRandomListName(){
    const listNames = ["To Do", "Doing", "Done", "In Progress", "Current Sprint", "On Hold", "Next", "Review", "Backlog", "Icebox", "Blocked", "Waiting",
        "Research", "Development", "Testing", "Deployment", "Completed", "Archived", "Ideas", "Brainstorming",];

    const randomIndex = Math.floor(Math.random() * listNames.length);
    return listNames[randomIndex];
}
export function generateRandomCardName(){

    const  adjectives = [
        "Daily", "Weekly", "Sprint", "Design", "Development", "Marketing", "Sales",
        "Support", "Personal", "Team", "Idea", "Task", "Meeting", "Planning",
        "Review", "Retrospective", "Urgent", "Important", "High", "Low", "Medium",
        "Critical", "Blocked", "Pending", "Completed", "Ongoing", "Upcoming",
        "Future", "Past", "Active", "Inactive", "New", "Old", "Open", "Closed" ]

    const   nouns = [
        "Tasks", "Goals", "Ideas", "Meetings", "Sprints", "Workflow", "Roadmap",
        "Backlog", "Planning", "Review", "Retrospective", "Issues", "Bugs",
        "Features", "Improvements", "Updates", "Decisions", "Actions", "Research",
        "Analysis", "Documentation", "Testing", "Deployment", "Maintenance",
        "Support", "Training", "Onboarding", "Feedback", "Questions", "Problems",
        "Solutions", "Risks", "Opportunities", "Threats", "Challenges" ]

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}
