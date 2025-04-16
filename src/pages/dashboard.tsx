import { Circle, ClipboardCheck, ClipboardSignature, Dot, Plus, UserPlus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ToDoForm } from "../components/todoform";
import { TodoCard } from "../components/todocard";
import { TaskContext } from "../context/taskscontext";
import { Task } from "../interfaces/task";

export function Dashboard() {

    const [isNewToDoOpen, setIsNewToDoOpen] = useState(false);

    const { tasks } = useContext(TaskContext);

    const [pendings, setPendings] = useState<Task[]>([]);

    const [completed, setCompleted] = useState<Task[]>([]);

    useEffect(() => {
        setPendings(tasks.filter(task => task.status != "complete"));
        setCompleted(tasks.filter(task => task.status == "complete"));
    }, [tasks])

    return (
        <>
            <div className="py-10 px-18 flex flex-col gap-2">
                <div className="flex flex-col gap-0 justify-between items-baseline py-5">
                    <h1 className="text-4xl font-semibold">Welcome back, Sundar 🙌</h1>
                    <div className="flex gap-5 w-full items-center justify-end">
                        <div className="flex gap-1">
                            <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                            <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                            <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                            <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                            <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                        </div>
                        <button className="h-10 flex gap-2 items-center border-2 border-red-300 text-red-400 px-5 rounded-lg"><UserPlus />Invite</button>
                    </div>
                </div>
                <div className="border-3 border-gray-200 flex gap-7 p-5">
                    <div className="w-1/2 p-5 rounded-lg shadow-md shadow-gray-300 flex flex-col gap-2">
                        <div>
                            <div className="flex justify-between">
                                <span className="flex gap-2 text-red-400"><ClipboardSignature className="text-gray-400" />To-Do</span>
                                <button onClick={() => { setIsNewToDoOpen(true) }} className="text-gray-400 flex gap-2"><Plus className="text-red-400" />Add task</button>
                            </div>
                            <span className="flex">20 June<span className="flex text-gray-400"><Dot /> Today</span></span>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="p-3 flex flex-col gap-1">
                                {
                                    pendings.length != 0
                                        ?
                                        pendings.map((task, index) => (
                                            <TodoCard key={index} id={task.id} title={task.title} description={task.description} priority={task.priority} status={task.status} imgpath="/src/assets/img2.jpg" />
                                        ))
                                        :
                                        <div className="flex justify-center italic">No data to show</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                        <div className="flex flex-col gap-2 p-5 rounded-lg shadow-md shadow-gray-300">
                            <span className="flex text-red-400 font-semibold"><ClipboardCheck className="text-gray-400" />Task Status</span>
                            <div className="flex w-full gap-3 overflow-auto">
                                <div className="flex flex-col gap-1">
                                    <img className="w-40 aspect-square bg-gray-200" src="a" alt="a" />
                                    <span className="flex items-center gap-2"><Circle className="text-green-500" size={12} fill="currentColor" />Completed</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <img className="w-40 aspect-square bg-gray-200" src="a" alt="a" />
                                    <span className="flex items-center gap-2"><Circle className="text-blue-500" size={12} fill="currentColor" />In Progress</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <img className="w-40 aspect-square bg-gray-200" src="a" alt="a" />
                                    <span className="flex items-center gap-2"><Circle className="text-red-500" size={12} fill="currentColor" />Not Started</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-lg shadow-md shadow-gray-300">
                            <span className="flex text-red-400 font-semibold"><ClipboardCheck className="text-gray-400" />Completed Task</span>
                            <div className="p-3 flex flex-col gap-1">
                                {
                                    completed.length != 0
                                        ?
                                        completed.map((task, index) => (
                                            <TodoCard key={index} id={task.id} title={task.title} description={task.description} status={task.status} imgpath="/src/assets/img2.jpg" />
                                        ))
                                        :
                                        <div className="flex justify-center italic">No data to show</div>
                                }
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <ToDoForm isOpen={isNewToDoOpen} onClose={() => { setIsNewToDoOpen(false) }} />
        </>
    )
}