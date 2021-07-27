import React from 'react';

import Task from './Task';

const TaskList = ({tasks, removeTask, completedTask}) => {
    return ( 
        <>
           {tasks.map((task) => (
                <Task 
                key={task.id}
                task={task} 
                removeTask={removeTask}
                completedTask={completedTask}
                />
            ))}
        </>
     );
}
    
export default TaskList
