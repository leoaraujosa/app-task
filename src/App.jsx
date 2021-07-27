import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  
  function formattedDate(){
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = data.getFullYear(),
        hora = data.getHours(),
        minutos = data.getMinutes();
    return dia+"/"+mes+"/"+ano+" às "+hora+":"+minutos;
}
  // Utilizando o useState para que a TaskList esteja sendo atualizado.

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Fazer o café",
      completed: false,
      date: formattedDate(),
    },
    {
      id: "2",
      title: "Ler um livro",
      completed: false,
      date: formattedDate(),
    },
  ]);

  //Espera o valor vindo do componente AddTask para que uma nova Task seja gerada.

  const taskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        date: formattedDate(),
      },
    ];
    setTasks(newTasks);
  }

  //Função que exibe todas as outras tasks na lista menos a task que possua o id igual ao id da task que o botão de excluir esteja sendo clicado.

  const removeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  //Função para alterar o status da task para true quando o usuário clicar no icon de check. 

  const completedTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id === taskId ? task.completed = true : {})
    setTasks(newTasks);
    console.log(newTasks);
  }

  return (
    <>
      <div className="container">
        <div className="container-tasks">
          <Header name="Add New Task" />
          <AddTask taskAddition={taskAddition}/>
          <TaskList 
          tasks={tasks}
          removeTask={removeTask}
          completedTask={completedTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
