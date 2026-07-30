import "../styles/TaskItem.css";
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-hot-toast";
function TaskItem({task, onToggle, onDelete, onUpdate}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const handleSave = () => {

        if (!editedTitle.trim()) return;
    
        onUpdate(task._id, editedTitle);
    
        setIsEditing(false);
    
    };
    const createdDate = new Date(task.createdAt).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    const updatedDate = new Date(task.updatedAt).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    return(
        <div className="task">
        <div>
        {
    isEditing ? (
        <input
            value={editedTitle}
            onChange={(e) =>
                setEditedTitle(e.target.value)
            }
        />
    ) : (
        <h3 className={task.completed ? "completed" : ""}>{task.title}</h3>
    )
}
            <p> status: {task.completed ? "completed ✅" : "pending ⏳"}</p>
            {/* 🚀 Render the new metadata blocks layout */}
                <div className="task-dates">
                    <small>📅 Created: {createdDate}</small>
                    {task.updatedAt && task.updatedAt !== task.createdAt && (
                        <small> ✏️ Edited: {updatedDate}</small>
                    )}
                </div>
            </div>



            <div className="task-actions">
            {/* <button onClick={()=>onToggle(task)}>✅</button> &nbsp;
            <button onClick={()=>onDelete(task)}>🗑️</button> */}

            {
    isEditing ? (

        <>
            <button onClick={handleSave} >
                Save
            </button>

            <button
                onClick={() => {
                    setEditedTitle(task.title);
                    setIsEditing(false);
                }}
            >
                Cancel
            </button>
        </>

    ) : (

        <>
            <button 
                onClick={() => setIsEditing(true)}
            >
             ✏️
            </button>

            <button 
                onClick={() => onToggle(task)}
            >
              ✅
            </button>

            <button 
                onClick={() => onDelete(task)}
            >
             🗑️
            </button>
        </>

    )
}
            </div>
        </div>
    );
}

export default TaskItem;