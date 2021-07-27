import React from 'react';
import {CgClose, CgCheck} from 'react-icons/cg'

import '../styles/Task.css';

const Task = ({task, removeTask, completedTask}) => {
    return ( 
        <>
            <div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}> {/* Se o completed for == true a borda da task muda de cor*/}
                <div className="task-title">
                    {task.title}
                </div>
                <div className="buttons-container">
                    <button className="completed-task-button">
                        <CgCheck onClick={() => completedTask(task.id)}/>                       
                    </button>
                    <button className="remove-task-button">
                        <CgClose onClick={() => removeTask(task.id)}/>
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Task;