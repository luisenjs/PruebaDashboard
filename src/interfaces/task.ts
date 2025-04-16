export interface Task {
    id: string;
    title: string;
    description: string;
    priority: "moderate" | "basic";
    status: "not started" | "in progress" | "complete"
}