import { TaskProvider } from "./context/taskscontext"
import { Navigation } from "./navigation/navigation"

function App() {

  return (
    <TaskProvider>
      <Navigation />
    </TaskProvider>
  )
}

export default App
