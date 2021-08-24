import React from 'react';
import {CgClose, CgCheck} from 'react-icons/cg'

import '../styles/Task.css';

const Task = ({task, removeTask, completedTask, hidden = false}) => {
    return ( 
        <>
            <div className="task-container" style={{ 
              borderLeft: task.completed ? "6px solid chartreuse" : '',
              display: hidden ? "none" : "flex"
              }}>
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