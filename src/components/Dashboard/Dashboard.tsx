import { useState } from "react";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskList from "../TaskList/TaskList";
import type { Task } from "../../types/index";
import TaskForm from "../TaskForm/TaskForm";

/**
 * Dashboard component serves as the main component of the Task Manager application. 
 * It manages the state of the task list and the filtered task list. 
 * It renders the TaskFilter component for filtering tasks and the TaskList component for displaying tasks. 
 * The Dashboard component also contains the logic for filtering tasks based on the selected filters, 
 * updating task status, and deleting tasks.  
 */
function Dashboard() {

    /**
     * Initial task list with 3 tasks. In a real application, 
     * this data would likely come from an API or database.
     */
    const [taskList, setTaskList] = useState<Task[]>([])

    /**
     * State to hold the filtered list of tasks based on the selected filters. 
     * Initially, it is set to the full task list.  
     */
    const [filteredTaskList, setFilteredTaskList] = useState<Task[]>(taskList)

    const handleTaskAdd = (newTask: Task) => {  
        console.log('This New Task:', newTask)
        setTaskList([...taskList, newTask])
        setFilteredTaskList([...taskList, newTask])
    }

    return (
        <div>
            <br />
            <h2>Welcome to the Task Manager App! </h2>
            <br />

           <TaskForm onTaskAdded = {handleTaskAdd}  />    

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