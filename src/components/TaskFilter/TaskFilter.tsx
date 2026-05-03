import type { Task, TaskFilterProps } from "../../types";

/**
 * TaskFilter component allows users to filter tasks based on their status and priority. 
 * The onFilterChange prop is a callback function that updates the 
 * filtered task list based on the selected filters.    
 */
function TaskFilter({ onFilterChange }: TaskFilterProps) {

    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: .2 }}>
                <p>Status</p>
                {/**
                    * The select element allows users to choose a status filter.    
                 */}
                <select onChange={(e) => onFilterChange({ status: e.target.value as Task['status'] })}>
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div style={{ flex: .2 }}>
                <p>Priority</p>
                {/**
                    * The select element allows users to choose a priority filter.    
                 */}
                <select onChange={(e) => onFilterChange({ priority: e.target.value as Task['priority'] })}>
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
    )

}

export default TaskFilter;