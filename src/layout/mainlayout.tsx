import { Outlet } from "react-router";
import { HeaderLayout } from "./headerlayout";
import { Sidebar } from "./sidebar";

export function MainLayout() {
    return (
        <div className="w-screen h-screen">
            <header className="h-1/12 w-full fixed">
                <HeaderLayout />
            </header>
            <div className="flex w-full h-full pt-20">
                <aside className="w-3/12">
                    <Sidebar />
                </aside>
                <main className="w-full overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}