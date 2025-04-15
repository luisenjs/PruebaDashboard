import { Bell, Calendar, Search } from "lucide-react";

export function HeaderLayout() {
    return (
        <div className="bg-white z-1000 flex items-center text-white px-5 py-7 shadow-lg shadow-gray-200">
            <span className="text-black text-3xl font-semibold w-2/12 text-center"><span className="text-red-400">Dash</span>board</span>
            <div className="flex grow px-10">
                <input className="shadow-lg shadow-gray-200 rounded-lg w-full px-2 placeholder:text-gray-400 text-black" type="text" placeholder="Search your task here..." />
                <button className="bg-red-400 rounded-lg p-2"><Search /></button>
            </div>
            <div className="flex gap-1 w-2/12 justify-center px-5">
                <button className="bg-red-400 rounded-lg p-2"><Bell /></button>
                <button className="bg-red-400 rounded-lg p-2"><Calendar /></button>
            </div>
            <div className="flex flex-col w-1/12 px-5">
                <span className="text-black font-semibold">Tuesday</span>
                <span className="text-sky-400">20/06/2023</span>
            </div>
        </div>
    )
}