


function TaskForm({ onTaskAdded }: { onTaskAdded: (task: any) => void }) {

    const handleSubmit = (e: React.SubmitEvent) => {
        // Prevent the default form submission behavior to avoid page reload.
        e.preventDefault()
        // Create a new FormData object from the form element to easily access form values.
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const newTask = {
            id: Date.now().toString(),
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            status: formData.get("status") as string,
            priority: formData.get("priority") as string,
            dueDate: formData.get("dueDate") as string,
        }

        if (!newTask.title || !newTask.description || !newTask.dueDate) {
            alert("Please fill in all required fields (Title, Description, Due Date).");
            return;
        }   

        onTaskAdded(newTask)    
        alert("Task added successfully!")
         // Clear form data after submission
        e.target.reset();
    }   

    return (
        <div>
            <h3>Add New Task</h3>
            <form style={{ border: '1px solid #8b7070'}} onSubmit={handleSubmit}>
                <div ><br />
                    <label htmlFor="title" style={{ marginRight: "20px" }}>Title:</label>
                    <input type="text" id="title" name="title" />
                </div> <br />
                <div>
                    <label htmlFor="description" style={{ marginRight: "20px" }}>Description:</label>
                    <textarea id="description" name="description" rows={4} />
                </div><br />
                <div>
                    <label htmlFor="status" style={{ marginRight: "20px" }}>Status:</label>
                    <select id="status" name="status">
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div><br />
                <div>
                    <label htmlFor="priority" style={{ marginRight: "20px" }}>Priority:</label>
                    <select id="priority" name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div><br />
                <div>
                    <label htmlFor="dueDate" style={{ marginRight: "20px" }}>Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" />
                </div><br />
                <button type="submit">Add Task</button><br /><br />
            </form>
        </div>
    );
}

export default TaskForm;