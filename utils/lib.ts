export type StreakCounter = {
    currentCount: number;
    lastLoginDate: string;
    startDate: string; 
}

export type StreakStatus = "increment" | "none" | "reset"

export const STREAK_KEY = "streak_count";

export function formattedDate(date: Date): string {    
    return date.toLocaleDateString("en-GB");
}

export function formattedDateTime(date: string | Date): number {  
    const setDate = new Date(date)  
    return setDate.getTime();
}

export function differenceInDays(d1: Date, d2: string): number {        
    const diffTime = Math.abs((new Date(d1).getTime())- (new Date(d2).getTime()));
    const diffInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffInDays;
}

export function buildStreak(date: Date, overrideDefaults?: Partial<StreakCounter>): StreakCounter {
    const defaultStreak = {
        currentCount: 1,
        lastLoginDate: formattedDate(date),
        startDate: formattedDate(date),
    };

    return {
        ...defaultStreak,
        ...overrideDefaults
    }
}