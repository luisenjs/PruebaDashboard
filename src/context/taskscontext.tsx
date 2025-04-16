import { createContext, useEffect, useState } from "react";
import { Task } from "../interfaces/task"

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    addTask: () => { },
    removeTask: () => { }
})

export function TaskProvider({ children }: { children: React.ReactNode }) {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem("tasks");
        if (data) setTasks(JSON.parse(data));
    }, [change])

    function addTask(task: Task) {
        localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
        setChange(p => !p);
    }

    function removeTask(id: string) {
        const newTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setChange(p => !p);
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
}