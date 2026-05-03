import type { TaskItemProps } from "../../types";

/**
 * TaskItem component represents a single task item in the task list. 
 * It displays the task's title, description, status, priority, and due date. 
 * It also provides a dropdown to change the task's status and a button to delete the task. 
 */
function TaskItem({ task: { id, title, description, status, priority, dueDate }, onStatusChange, onDelete }: TaskItemProps) {

    return (
        <div style={{ border: '1px solid #8b7070', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{title}</h3>
                <div>
                    {/**
                        * The select element allows users to change the status of the task.
                     */}
                    <select value={status} onChange={(e) => onStatusChange(id, e.target.value as any)}>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    {/**
                        * The button allows users to delete the task when clicked.
                     */}
                    <button style={{marginLeft: '20px'}} onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <p>{description}</p>
            </div>
             <div style={{display: 'flex', marginBottom: '10px' }}>
                <p>
                    <span style={{ paddingRight: '20px' }}>Priority: {priority}</span>
                    <span>Due Date: {dueDate}</span>
                </p>
            </div>

        </div>
    )
}

export default TaskItem;