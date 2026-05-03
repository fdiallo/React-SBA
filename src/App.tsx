
import { useState } from "react";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskList from "./components/TaskList/TaskList";
import type { Task } from "./types/index";

/**
 * Task Manager App
 * 
 * This app allows users to manage their tasks by adding, updating, and deleting them. 
 * Users can also filter tasks based on their status and priority.  
 * 
 */
function App() {

  /**
   * Initial task list with 3 tasks. In a real application, 
   * this data would likely come from an API or database.
   */
  const [taskList] = useState<Task[]>([
    {
      id: '1',
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'pending',
      priority: 'medium',
      dueDate: '2025-12-31'
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-11-30'
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Description for Task 3',
      status: 'completed',
      priority: 'low',
      dueDate: '2025-10-31'
    }
  ]
  )

  /**
   * State to hold the filtered list of tasks based on the selected filters. 
   * Initially, it is set to the full task list.  
   */
  const [filteredTaskList, setFilteredTaskList] = useState<Task[]>(taskList)

  return (
    <div>
      <br />
      <h2>Welcome to the Task Manager App! </h2>
      <br />

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
        }
        }

        /**
         * onDelete is a callback function that deletes a task when 
         * the delete button is clicked in the TaskItem component.    
         */
        onDelete={(taskId) => {
          console.log(`Task ${taskId} deleted`)
          setFilteredTaskList(filteredTaskList.filter(task => task.id !== taskId))
        }
        }
      />

    </div>
  )
}

export default App
