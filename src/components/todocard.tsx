import { useContext } from "react";
import { TaskContext } from "../context/taskscontext";
import { Circle, Ellipsis } from "lucide-react";
import Swal from "sweetalert2"
import { toast } from "react-toastify";

type todocardprops = {
    className?: string;
    id: string;
    title: string;
    description: string;
    priority?: string;
    status?: string;
    imgpath: string;
}

export function TodoCard({ className, id, title, description, priority, status, imgpath }: todocardprops) {

    const { removeTask } = useContext(TaskContext);

    function deleteTask(id: string) {
        Swal.fire({
            title: "Are you sure you want delete this task?",
            icon: "warning",
            showCancelButton: true,
        }).then((response) => {
            if (response.isConfirmed) {
                removeTask(id);
                toast.success("The task has been deleted successfuly");
            }
        })
    }

    return (
        <div className={`relative px-12 py-2 w-full border-2 border-gray-200 rounded-lg ${className}`}>
            <Circle className="absolute top-2 left-2 text-red-600" size={16} />
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className="flex justify-between">
                    <p>{description}</p>
                    <img className="h-18 aspect-square bg-gray-300 rounded-lg" src={imgpath} alt="s" />
                </div>
                <div className="flex justify-between">
                    {priority && <small className="text-xs">Priority: <span className={`capitalize ${priority === "moderate" ? "text-sky-400" : "text-purple-800"}`}>{priority}</span></small>}
                    {status && <small className="text-xs">Status: <span className={`capitalize ${status === "complete" ? "text-green-500" : status === "not started" ? "text-red-500" : "text-blue-500"}`}>{status}</span></small>}
                    <small className="text-gray-400 text-xs">Created on: 20/05/2023</small>
                </div>
            </div>
            <Ellipsis onClick={() => deleteTask(id)} className="absolute top-2 right-2 text-gray-500" size={16} />
        </div>
    )

}