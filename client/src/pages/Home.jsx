import {useEffect, useState} from "react";
import {getTasks} from "../services/taskService";
import {updateTask,deleteTask} from "../services/taskService";
import  TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import useTasks from "../hooks/useTasks";
import { toast } from "react-hot-toast";
import "../styles/Home.css";

//import { Toaster } from 'react-hot-toast';
function Home(){

   // const [tasks, setTasks] = useState([]);
   const {tasks, fetchTasks, loading, error}= useTasks('');
   const [search, setSearch]= useState('');
   const [filter, setFilter] = useState("all");
   

 
     const handleUpdateTitle = async (id, title) => {
        try {
            await updateTask(id, {
                title
            });
    
            fetchTasks();
            toast.success("Task Updated Successfully!");
    
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };
const handleToggle =async (task)=>{
    try{
        await updateTask(task._id,{
            completed: !task.completed
        });
       await fetchTasks();
       
    }
    catch(error){
        console.log(error)
    }
};

const handleDelete= async (task)=>{
   const isConfirmed= window.confirm("Are you sure you want to delete this task?");
   if(!isConfirmed) return;
    try{
        await deleteTask(task._id);
        await fetchTasks();
        toast.success("Task Deleted Successfully!");
       
    }
    catch(error){
        console.log(error);
        toast.error("Something went wrong!");
    }
}
const filteredTasks= tasks.filter((task)=>{const matchesSearch =
    task.title
        .toLowerCase()
        .includes(search.toLowerCase());
    
        const matchesFilter =

        filter === "all"

        ||

        (filter === "completed" && task.completed)

        ||

        (filter === "pending" && !task.completed);

    return matchesSearch && matchesFilter;
})
 if(error){
    return(
        <div style={{color:"red"}} >
            <h3>Something went wrong...</h3>
            <p>{error.message}</p>
            <button onClick={fetchTasks}>Retry Connection</button>
        </div>
    )
 }
  if(loading){
    return(
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h3>⏳ Loading Tasks...</h3>
        </div>
    )
  }
    return(
        
        <div className={"home"}>
            <h1>Welcome to the App</h1>
            {/* <Toaster position="top-right" reverseOrder={false} /> */}
            {/* <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} onUpdate={handleUpdateTitle}/> */}
            <input
                type="text"
                className="search-box"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
           />
     <div className="filters">
        <button className={filter === "all" ? "active" : ""}
        onClick={()=>setFilter("all")} >
        All
        </button>

        <button className={filter === "completed" ? "active" : ""}
        onClick={()=>setFilter("completed")} >
        Completed
        </button>

        <button  className={filter === "pending" ? "active" : ""}
        onClick={()=>setFilter("pending")} >
        Pending
        </button>
         {/* for special conditions */}
        </div>
         {tasks.length===0 ? (
            <p>No tasks found. Add a task!</p>):
            filteredTasks.length===0 ? (
                <p> 
                {filter==="completed" && "No tasks are completed yet."}
                {filter==="pending" && "No tasks are pending."}
                {filter==="all" && "No tasks found. Add some tasks!"}
                
                </p>
            ): (
                <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} onUpdate={handleUpdateTitle}/>
            )}
            <TaskForm fetchTasks={fetchTasks}/>
           </div>

          
    )
};

export default Home;