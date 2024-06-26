export type Task = {
    id: string,
    title: string,
    description?: string,
    isComplete: boolean,
    isFavourite: boolean,
    dueDate?: Date,
    projectId: string,
    subTasks?: Task[],
    parentTask?: Task,
}