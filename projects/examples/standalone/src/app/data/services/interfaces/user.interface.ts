export interface UserASP {
    id: number,
    username: string,
    description: string,
    avatarUrl: string | null,
    
    subscriptionsAmount: number,
    firstName: string,
    lastName:string,
    isActive: boolean,
    stack: string[],
    city: string,
    token:string,
    passwordHash:string
}