import React, { useState } from 'react';

import "../styles/AddTask.css";
import Button from './Button';

// Recupera o valor inserido no Input para inserção de uma nova task.

const AddTask = ({taskAddition}) => {
    const [inputData, setInputData] = useState("");

    const inputChange = (e) => {
        setInputData(e.target.value);
    }

    const addTaskClick = () => {
        taskAddition(inputData)
        setInputData("");
    }

    return ( 
        <>

            <div className="add-task-container">

                <input 
                type="text" 
                className="add-task-input"
                onChange={inputChange}
                value={inputData}
                />
                <div className="add-task-button">
                    <Button onClick={addTaskClick} disabled={!inputData.length}>Adicionar</Button>
                </div>

            </div>

        </>
     );
}
 
export default AddTask;