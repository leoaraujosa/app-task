import React from 'react';

import Task from './Task';

const TaskList = ({ tasks, removeTask, completedTask, hiddenCompleted = false }) => {
    return ( 
        <>
           {tasks.map(task => (
              <Task 
                key={task.id}
                task={task} 
                removeTask={removeTask}
                completedTask={completedTask}
                hidden={hiddenCompleted && task.completed}
              />
            ))}
        </>
     );
}
    
export default TaskList
