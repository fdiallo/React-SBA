import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider, useTheme } from "./components/ThemeContext/ThemeContext";
import ThemeToggle from "./components/ThemeContext/ThemeToggle";

/**
 * Task Manager App
 * This app allows users to manage their tasks by adding, updating, and deleting them. 
 * Users can also filter tasks based on their status and priority.  
 * The Dashboard component serves as the main component of the Task Manager application. 
 */
function App() {


  return (
    <ThemeProvider>
      <div>
       
        <Dashboard />
      </div>
    </ThemeProvider>
  )
}

export default App 
