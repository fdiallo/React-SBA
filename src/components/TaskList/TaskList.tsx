import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

/**
 * TaskList component is responsible for rendering the list of tasks. 
 * It receives the list of tasks and the callback functions 
 * for changing the status and deleting a task as props. 
 * It maps through the list of tasks and renders a TaskItem component 
 * for each task, passing down the necessary props.
 */
function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {

    return (
        <div>
            {/**
                * Map through the list of tasks and render a TaskItem component for each task.
             */}
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default TaskList