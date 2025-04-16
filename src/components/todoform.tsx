import { useForm } from "react-hook-form";
import { Task } from "../interfaces/task";
import { useContext } from "react";
import { TaskContext } from "../context/taskscontext";
import { X } from "lucide-react";

type ToDoFormProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function ToDoForm({ isOpen, onClose }: ToDoFormProps) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Task>();

    const { addTask } = useContext(TaskContext);

    function saveTask(e: Task) {
        e.id = Date.now().toString();
        addTask(e);
        reset();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
            <div className="bg-white rounded-xl w-1/4 p-5 flex flex-col gap-4 relative">
                <button className="absolute right-5" onClick={onClose}><X color="gray" size={20} /></button>
                <h1 className="text-2xl font-semibold">Add new task</h1>
                <form onSubmit={handleSubmit(saveTask)} className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            {...register("title", { required: "This field is a must", minLength: { value: 5, message: "Mínimo 5 caracteres" } })}
                            placeholder="Call mom before 4 pm"
                            className={`w-full p-2 rounded-lg ring ring-gray-300 outline-0 focus:ring-red-300 focus:ring-2 ${errors.title ? "border-2 border-red-500" : ""}`}
                        />
                        {errors.title && (<span className="text-red-500">{errors.title.message}</span>)}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description">Description</label>
                        <textarea
                            {...register("description", { required: "This field is a must" })}
                            placeholder="Tell her to go for a walk down the ally"
                            className={`w-full min-h-[10vh] max-h-[20vh] p-2 rounded-lg ring ring-gray-300 outline-0 focus:ring-red-300 focus:ring-2 ${errors.description ? "border-2 border-red-500" : ""}`}
                        />
                        {errors.description && (<span className="text-red-500">{errors.description.message}</span>)}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="priority">Priority</label>
                        <select
                            {...register("priority", { required: "This field is a must" })}
                            className={`w-full p-2 rounded-lg ring ring-gray-300 outline-0 focus:ring-red-300 focus:ring-2 ${errors.priority ? "border-2 border-red-500" : ""}`}
                        >
                            <option value="">Select a priority</option>
                            <option value="moderate">Moderate</option>
                            <option value="basic">Basic</option>
                        </select>
                        {errors.priority && (<span className="text-red-500">{errors.priority.message}</span>)}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="status">Status</label>
                        <select
                            {...register("status", { required: "This field is a must" })}
                            className={`w-full p-2 rounded-lg ring ring-gray-300 outline-0 focus:ring-red-300 focus:ring-2 ${errors.status ? "border-2 border-red-500" : ""}`}
                        >
                            <option value="">Select a status</option>
                            <option value="not started">Not Started</option>
                            <option value="in progress">In Progress</option>
                            <option value="complete">Complete</option>
                        </select>
                        {errors.status && (<span className="text-red-500">{errors.status.message}</span>)}
                    </div>
                    <button type="submit" className="bg-red-400 rounded-lg p-2 text-white">Cerrar</button>
                </form>
            </div>
        </div>
    )
}