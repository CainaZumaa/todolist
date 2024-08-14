/* 45:37 */

import { useState } from 'react'
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer uma To Do List em React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Andar de Skate",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
      id: Math.floor(Math.random() * 10000 ),
      text, 
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);
};

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
      );
      setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
    todo.id === id ? (todo.isCompleted =! todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };


  return (

    
    <div className="app" >
      <h1>Lista de Tarefas</h1>
        <div className="todo-list">
        {/* Lista de Tarefas, o map é usado para percorrer o array e printar os valores */}
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/> 
          ))} 
        </div>
        <TodoForm addTodo={addTodo} />
    </div>

  )
}

export default App
