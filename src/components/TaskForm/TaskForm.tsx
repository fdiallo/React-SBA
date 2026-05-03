

function AddTaskForm() {
    return (
        <div>
            <h3>Add New Task</h3>
            <form style={{border: "1px solid white"}}>
                <div ><br />
                    <label htmlFor="title" style={{marginRight: "20px"}}>Title:</label>
                    <input type="text" id="title" name="title" />
                </div> <br />
                <div>
                    <label htmlFor="description" style={{marginRight: "20px"}}>Description:</label>
                    <textarea id="description" name="description" rows={4} />
                </div><br />
                <div>
                    <label htmlFor="status" style={{marginRight: "20px"}}>Status:</label>
                    <select id="status" name="status">
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div><br />
                <div>
                    <label htmlFor="priority" style={{marginRight: "20px"}}>Priority:</label>
                    <select id="priority" name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div><br />
                <div>
                    <label htmlFor="dueDate" style={{marginRight: "20px"}}>Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" />   
                </div><br />
                <button type="submit">Add Task</button><br /><br />
            </form>
        </div>
    );
}

export default AddTaskForm; 


// import React, { useState } from 'react';

// // Define an interface for your form data if using a single state object
// interface ContactFormData {
// name: string;
// email: string;
// message: string;
// }

// const ContactForm: React.FC = () => {
// // --- STATE ---
// // TODO: Initialize state for name, email, and message
// // Choose either individual useState or a single state object
// const [formData, setFormData] = useState<ContactFormData>({
//     name:"Fabiola",
//     email:"SeniorDev@fabiola.dev",
//     message:"HWIC"
// })

// // --- HANDLERS ---
// // TODO: Implement handleChange function(s) for inputs/textarea
// // Remember to handle event types correctly (e.g., React.ChangeEvent<HTMLInputElement>)
// const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
//     const {name, value} = event.target
//     const newData = {...formData}
//     newData[name] = value
//     console.log(newData)
//     setFormData(newData)
// }

// // TODO: Implement handleSubmit function
// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// // TODO: Prevent default form submission
// event.preventDefault()
// // TODO: Log the form data (name, email, message) to the console
// };

// return (
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="name">Name:</label>
//             <input
//                 type="text"
//                 id="name"
//                 name="name" // Important if using single state object with computed property names
//                 // TODO: Add value and onChange props
//                 value={formData.name}
//                 onChange={handleChange}
//             />
//         </div>
//         <div>
//             <label htmlFor="email">Email:</label>
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 // TODO: Add value and onChange props
//                 onChange={handleChange}
//                 value={formData.email}
//             />
//         </div>
//         <div>
//             <label htmlFor="message">Message:</label>
//             <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 // TODO: Add value and onChange props (remember textarea uses value prop)
//                 onChange={handleChange}
//                 value={formData.message}
//             />
//         </div>
//         <button type="submit">Send Message</button>
//     </form>
//     );
// };

// export default ContactForm;