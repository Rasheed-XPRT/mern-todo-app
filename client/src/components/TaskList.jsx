import TaskItem from './TaskItem';

function TaskList({tasks, onToggle, onDelete, onUpdate}){
    return(
        <div>
            {tasks.map(task =>(
                <TaskItem key={task._id} task={task} onToggle={onToggle} onDelete={onDelete} onUpdate={onUpdate}/>


            ))}
        </div>
    )
}

export default TaskList;