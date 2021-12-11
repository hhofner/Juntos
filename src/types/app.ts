//TODO: Think about this a bit more -- more robust
interface User {
    teams: Team[],
    activePersonalGoals: Goal[],
    endedPersonalGoals: Goal[],
}

interface Team {
    members: Member[],
    activeGoal: Goal[],
    endedGoal: Goal[]
}

// TODO: Make this *team member? Some type of generic
interface Member {
    name: string,
    email: string
}

interface Challenge {
    name: string;
    startDate: Date;
    endDate: Date;
    progress: number;
    target: number;
    contributions: {
        user: Member,
        value: number
    }[],
    isCompleted: undefined | true | false;
}