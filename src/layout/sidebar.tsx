import { Clipboard, HelpCircle, LayoutDashboard, ListChecks, Settings } from "lucide-react";
import { NavLink } from "react-router";

export function Sidebar() {
    return (
        <div className="pt-18 h-full">
            <div className="bg-red-400 rounded-r-lg w-full h-full">
                <div className="relative flex flex-col gap-3 py-5 items-center pt-26">
                    <div className="flex flex-col items-center absolute -top-10 text-white">
                        <img className="aspect-square bg-gray-600 rounded-full w-20" src="/src/assets/img.jpg" alt="img" />
                        <span className="font-semibold">Sundar Gurung</span>
                        <small>sundargurung360@gmail.com</small>
                    </div>
                    <NavLink to="/dashboard" className={({ isActive }) => `flex gap-2 text-white px-2 py-3 rounded-xl w-11/12 ${isActive ? "bg-white text-red-400!" : "hover:bg-white/10"}`}><LayoutDashboard />Dashboard</NavLink>
                    <NavLink to="/vital-task" className={({ isActive }) => `flex gap-2 text-white px-2 py-3 rounded-xl w-11/12 ${isActive ? "bg-white text-red-400!" : "hover:bg-white/10"}`}><ListChecks />Vital Task</NavLink>
                    <NavLink to="/my-tasks" className={({ isActive }) => `flex gap-2 text-white px-2 py-3 rounded-xl w-11/12 ${isActive ? "bg-white text-red-400!" : "hover:bg-white/10"}`}><Clipboard />Dashboard</NavLink>
                    <NavLink to="/task-categories" className={({ isActive }) => `flex gap-2 text-white px-2 py-3 rounded-xl w-11/12 ${isActive ? "bg-white text-red-400!" : "hover:bg-white/10"}`}><ListChecks />Task Categories</NavLink>
                    <NavLink to="/settings" className={({ isActive }) => `flex gap-2 text-white px-2 py-3 rounded-xl w-11/12 ${isActive ? "bg-white text-red-400!" : "hover:bg-white/10"}`}><Settings />Settings</NavLink>
                    <NavLink to="/help" className={({ isActive }) => `flex gap-2 text-white px-2 py-3 rounded-xl w-11/12 ${isActive ? "bg-white text-red-400!" : "hover:bg-white/10"}`}><HelpCircle />Help</NavLink>
                </div>
            </div>
        </div>
    )
}