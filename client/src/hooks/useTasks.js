import {useState, useEffect} from 'react';
import {getTasks} from '../services/taskService';

function useTasks(){
    const [tasks, setTasks]= useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(null);
    
    const fetchTasks= async()=>{
        try{
            setLoading(true);
            setError(null);
            const response= await getTasks();
            setTasks(response.data);
            
        }catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchTasks();
    },[]);

    return{
        tasks,
        fetchTasks,
        loading,
        error
    }
};
export default useTasks;