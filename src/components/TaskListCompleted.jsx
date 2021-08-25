import React from 'react';

import TaskCompleted from './TaskCompleted';

const TaskListCompleted = ({ tasks, hiddenUnfinished = false }) => {
    return ( 
        <>
            {tasks.map(task => (
              <TaskCompleted 
                key={task.id}
                task={task}
                hidden={hiddenUnfinished && !task.completed}
              />
            ))}
        </>
     );
}
    
export default TaskListCompleted
