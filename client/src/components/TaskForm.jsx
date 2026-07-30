import {useState} from 'react';
import { createTask } from '../services/taskService';
import "../styles/TaskForm.css";
import toast from "react-hot-toast";
function TaskForm({fetchTasks}){
    const [title, setTitle]= useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(title);
        if(!title.trim()) return;
        try{
           await  createTask({title});
           await fetchTasks();
            setTitle('')
            toast.success("Task created successfully!");
        }
        catch(error){
            console.log(error)
            toast.error("Something went wrong!");
        }
    }
    return(
        <div>
        <form onSubmit={handleSubmit} className="task-form">
            <input type="text" value={title} 
            onChange={(e)=>setTitle(e.target.value)} placeholder="Task title"></input>
            <button>
                Add Task
            </button>
        </form>
            <footer>
                <i style={{fontSize:"12px", color:"gray"}}>&copy; {new Date().getFullYear()} MERN Todo. Developed by Rasheed.</i>
            </footer>
            </div>
    )
};
export default TaskForm;