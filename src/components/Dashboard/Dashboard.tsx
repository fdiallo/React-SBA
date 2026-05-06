import { useEffect, useState } from "react";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskList from "../TaskList/TaskList";
import type { Task } from "../../types/index";
import TaskForm from "../TaskForm/TaskForm";
import ThemeToggle from "../ThemeContext/ThemeToggle";
import { useTheme } from "../ThemeContext/ThemeContext";

/**
 * Dashboard component serves as the main component of the Task Manager application. 
 * It manages the state of the task list and the filtered task list. 
 * It renders the TaskFilter component for filtering tasks and the TaskList component for displaying tasks. 
 * The Dashboard component also contains the logic for filtering tasks based on the selected filters, 
 * updating task status, and deleting tasks.  
 */
function Dashboard() {

    // Get the current theme colors from the ThemeContext using the useTheme hook.
    const { colors } = useTheme()
    // Define styles for the dashboard component using the theme colors.
    const appStyles = {
        backgroundColor: colors.background,
        color: colors.text,
        minHeight: '100vh',
        transition: 'all 0.3s ease', // Smooth transition!
        padding: '20px',
    }

    /**
     * State to hold the list of tasks. It is initialized with 
     * an empty array or with saved tasks from localStorage if available.       
     * The useState hook is used to manage the state of the task list, 
     * and it is initialized with a function that retrieves saved tasks from localStorage.
     * This allows the application to persist tasks across page reloads by saving 
     * them in the browser's local storage. If there are saved tasks, 
     * they are parsed from JSON and set as the initial state; otherwise, an empty array is used.
     */
    const [taskList, setTaskList] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem("tasks")
        console.log('Loaded tasks from localStorage:', savedTasks)
        return savedTasks ? JSON.parse(savedTasks) : []
    }
    )

    /**
     * useEffect hook is used to save the task list to localStorage whenever the task list changes. 
      * This ensures that any changes to the task list are persisted in localStorage, 
      * allowing the tasks to be retained even after a page reload. The effect runs 
      * whenever the taskList state changes, and it updates the localStorage 
      * with the new task list by converting it to a JSON string.  
     */
    useEffect(() => {
        console.log('Saving tasks to localStorage:', taskList)
        localStorage.setItem("tasks", JSON.stringify(taskList))
    }, [taskList])


    /**
     * State to hold the filtered list of tasks based on the selected filters. 
     * Initially, it is set to the full task list.  
     */
    const [filteredTaskList, setFilteredTaskList] = useState<Task[]>(taskList)

    // Callback function to handle adding a new task to the task list.
    const handleTaskAdd = (newTask: Task) => {
        console.log('This New Task:', newTask)
        setTaskList([...taskList, newTask])
        setFilteredTaskList([...taskList, newTask])
    }

    return (

        <div style={appStyles}>
            {/* Render the ThemeToggle component to allow users to switch between light and dark themes. */}
            <ThemeToggle />
            <br />
            <h2 style={{ border: '1px solid #8b7070', color: "#8b7070" }}>Welcome to the Task Manager App! </h2>
            <br />

            <TaskForm onTaskAdded={handleTaskAdd} />

            {/**
             * TaskFilter component allows users to filter tasks based on their status and priority.
             * The onFilterChange prop is a callback function that updates the filtered task list based on the selected filters.
             */}
            <TaskFilter onFilterChange={(filters) => {

                console.log('Filters changed:', filters)

                /**
                 * Filter the task list based on the selected status and priority. 
                 * If a filter is not selected (i.e., empty), it will not be applied. 
                 * The filtered task list is then updated using the setFilteredTaskList function. 
                 */
                setFilteredTaskList(taskList.filter(task => {
                    if (filters.status && task.status !== filters.status) {
                        return false;
                    }
                    if (filters.priority && task.priority !== filters.priority) {
                        return false;
                    }
                    return true;
                }))
            }
            } />

            <br />

            {/**
              * TaskList component displays the list of tasks based on the applied filters.
              */}
            <TaskList tasks={filteredTaskList}
                /**
                 * onStatusChange is a callback function that updates 
                 * the status of a task when it is changed in the TaskItem component.
                 */
                onStatusChange={(taskId, newStatus) => {
                    console.log(`Status of task ${taskId} changed to ${newStatus}`)
                    setFilteredTaskList(filteredTaskList.map(task => {
                        if (task.id === taskId) {
                            return { ...task, status: newStatus }
                        }
                        return task
                    }))
                    setTaskList(taskList.map(task => {
                        if (task.id === taskId) {
                            return { ...task, status: newStatus }
                        }
                        return task
                    }))
                }
                }

                /**
                 * onDelete is a callback function that deletes a task when 
                 * the delete button is clicked in the TaskItem component.    
                 */
                onDelete={(taskId) => {
                    console.log(`Task ${taskId} deleted`)
                    setFilteredTaskList(filteredTaskList.filter(task => task.id !== taskId))
                    setTaskList(taskList.filter(task => task.id !== taskId))
                }
                }
            />

        </div>
    )
}

export default Dashboard