import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "../layout/mainlayout";
import { Dashboard } from "../pages/dashboard";
import { VitalTasks } from "../pages/vitaltasks";
import { MyTasks } from "../pages/mytask";
import { TasksCategories } from "../pages/taskcategories";
import { Settings } from "../pages/settings";
import { Help } from "../pages/help";

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/vital-task" element={<VitalTasks />} />
                    <Route path="/my-tasks" element={<MyTasks />} />
                    <Route path="/task-categories" element={<TasksCategories />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/help" element={<Help />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}