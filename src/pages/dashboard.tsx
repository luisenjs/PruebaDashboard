import { Circle, ClipboardCheck, ClipboardSignature, Dot, Ellipsis, Plus, UserPlus } from "lucide-react";

export function Dashboard() {
    return (
        <div className="px-10 py-5 flex flex-col gap-2">
            <div className="flex justify-between items-baseline py-5">
                <h1 className="text-3xl font-semibold">Welcome back, Sundar 🙌</h1>
                <div className="flex gap-2 items-center">
                    <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                    <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                    <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                    <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                    <img className="w-10 h-10 bg-gray-500 rounded-lg" src="/src/assets/img.jpg" alt="s" />
                    <button className="h-10 flex gap-2 items-center border-2 border-red-300 text-red-400 px-5 rounded-lg"><UserPlus />Invite</button>
                </div>
            </div>
            <div className="border-3 border-gray-200 flex gap-5 p-5">
                <div className="w-1/2 p-5 rounded-lg shadow-md shadow-gray-300 flex flex-col gap-2">
                    <div>
                        <div className="flex justify-between">
                            <span className="flex gap-2 text-red-400"><ClipboardSignature className="text-gray-400" />To-Do</span>
                            <button className="text-gray-400 flex gap-2"><Plus className="text-red-400" />Add task</button>
                        </div>
                        <span className="flex">20 June<span className="flex text-gray-400"><Dot /> Today</span></span>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="p-3 flex flex-col gap-1">
                            <div className="relative px-9 py-2 w-full border-2 border-gray-200 rounded-lg">
                                <Circle className="absolute top-2 left-2 text-red-600" size={16} />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-semibold">Attended Nischal's Birthday Party</h2>
                                    <div className="flex gap-4">
                                        <p>Buy gift on the way n pick up cake from the bakery. (6 PM | Fresh Elements)</p>
                                        <img className="h-18 aspect-square bg-gray-300 rounded-lg" src="/src/assets/img2.jpg" alt="s" />
                                    </div>
                                    <div className="flex gap-2">
                                        <small>Priority: <span className="text-sky-400">Moderate</span></small>
                                        <small>Status: <span className="text-red-500">Not Started</span></small>
                                        <small className="text-gray-400">Created on: 20/05/2023</small>
                                    </div>
                                </div>
                                <Ellipsis className="absolute top-2 right-2 text-gray-500" size={16} />
                            </div>
                            <div className="relative px-9 py-2 w-full border-2 border-gray-200 rounded-lg">
                                <Circle className="absolute top-2 left-2 text-blue-600" size={16} />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-semibold">Landing Page Desing for travelers</h2>
                                    <div className="flex gap-4">
                                        <p>Buy gift on the way n pick up cake from the bakery. (6 PM | Fresh Elements)</p>
                                        <img className="h-18 aspect-square bg-gray-300 rounded-lg" src="/src/assets/img2.jpg" alt="s" />
                                    </div>
                                    <div className="flex gap-2">
                                        <small>Priority: <span className="text-sky-400">Moderate</span></small>
                                        <small>Status: <span className="text-blue-500">Progress</span></small>
                                        <small className="text-gray-400">Created on: 20/05/2023</small>
                                    </div>
                                </div>
                                <Ellipsis className="absolute top-2 right-2 text-gray-500" size={16} />
                            </div>
                        </div>
                        <div className="border-2 border-gray-300" />
                        <div className="relative px-9 py-2 w-full border-2 border-gray-200 rounded-lg">
                            <Circle className="absolute top-2 left-2 text-blue-600" size={16} />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">Presentation on final product</h2>
                                <div className="flex gap-4">
                                    <p>Buy gift on the way n pick up cake from the bakery. (6 PM | Fresh Elements)</p>
                                    <img className="h-18 aspect-square bg-gray-300 rounded-lg" src="/src/assets/img2.jpg" alt="s" />
                                </div>
                                <div className="flex gap-2">
                                    <small>Priority: <span className="text-sky-400">Moderate</span></small>
                                    <small>Status: <span className="text-blue-500">Progress</span></small>
                                    <small className="text-gray-400">Created on: 20/05/2023</small>
                                </div>
                            </div>
                            <Ellipsis className="absolute top-2 right-2 text-gray-500" size={16} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                    <div className="flex flex-col gap-2 p-5 rounded-lg shadow-md shadow-gray-300">
                        <span className="flex text-red-400 font-semibold"><ClipboardCheck className="text-gray-400" />Task Status</span>
                        <div className="flex w-full gap-3 overflow-auto">
                            <div className="flex flex-col gap-1">
                                <img className="w-40 aspect-square bg-gray-200" src="a" alt="a" />
                                <span className="flex"><Dot className="text-green-500" />Completed</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img className="w-40 aspect-square bg-gray-200" src="a" alt="a" />
                                <span className="flex"><Dot className="text-blue-500" />In Progress</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img className="w-40 aspect-square bg-gray-200" src="a" alt="a" />
                                <span className="flex"><Dot className="text-red-500" />Not Started</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg shadow-md shadow-gray-300">
                        <span className="flex text-red-400 font-semibold"><ClipboardCheck className="text-gray-400" />Completed Task</span>
                        <div className="p-3 flex flex-col gap-1">
                            <div className="relative px-9 py-2 w-full border-2 border-gray-200 rounded-lg">
                                <Circle className="absolute top-2 left-2 text-green-600" size={16} />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-semibold">Walk the dog</h2>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col gap-2">
                                            <p>Buy gift on the way n pick up cake from the bakery. (6 PM | Fresh Elements)</p>
                                            <small>Status: <span className="text-green-500">Complete</span></small>
                                            <small className="text-gray-400">Completed 2 days ago</small>
                                        </div>
                                        <img className="h-18 aspect-square bg-gray-300 rounded-lg" src="/src/assets/img2.jpg" alt="s" />
                                    </div>
                                </div>
                                <Ellipsis className="absolute top-2 right-2 text-gray-500" size={16} />
                            </div>
                            <div className="relative px-9 py-2 w-full border-2 border-gray-200 rounded-lg">
                                <Circle className="absolute top-2 left-2 text-green-600" size={16} />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-semibold">Conduct meeting</h2>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col gap-2">
                                            <p>Buy gift on the way n pick up cake from the bakery. (6 PM | Fresh Elements)</p>
                                            <small>Status: <span className="text-green-500">Complete</span></small>
                                            <small className="text-gray-400">Completed 2 days ago</small>
                                        </div>
                                        <img className="h-18 aspect-square bg-gray-300 rounded-lg" src="/src/assets/img2.jpg" alt="s" />
                                    </div>
                                </div>
                                <Ellipsis className="absolute top-2 right-2 text-gray-500" size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}