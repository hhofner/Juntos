//TODO: Think about this a bit more -- more robust
export interface User {
    id: number,
    teams: Team[],
    activePersonalGoals: Goal[],
    endedPersonalGoals: Goal[],
    workoutTypes: string[],

}

interface Team {
    members: Member[],
    activeGoal: Goal[],
    endedGoal: Goal[]
}

// TODO: Make this *team member? Some type of generic
interface Member {
    name: string,
    userId: number,
}

interface Challenge {
    name: string;
    owner: User;
    startDate: Date;
    endDate: Date;
    progress: number;
    target: number;
    contributions: {
        user: Member,
        value: number
    }[],
    isCompleted: undefined | true | false;

    workoutTypes: string[],
}

// This should be what will connect all the workout 
// types together
// ie 5 km running for person A --> 3 huevos (rancheros)
// 12 barbell reps at 50kg --> 2.5 huevos (rancheros)
// 
interface Huevo<WorkoutType> {

}
