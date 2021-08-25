import React from 'react';

import '../styles/TaskCompleted.css';

const TaskCompleted = ({task, hidden = false}) => {
    return ( 
        <>
            <div className="task-completed-container" style={{
              borderLeft: task.completed ? "6px solid chartreuse" : '',
              display: hidden ? "none" : "flex"
              }}>
                <div className="task-title">
                    {task.title}
                </div>
            </div>
        </>
     );
}
 
export default TaskCompleted;