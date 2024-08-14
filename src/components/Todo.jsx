import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
        className="todo" 
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}} 
    >
              <div className="content">
                <p>{todo.text}</p> {/* Printa o texto da lista */}
                <p className="category">({todo.category})</p> {/* Printa a categoria da lista */}
              </div>
              <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className="remove"  onClick={() => removeTodo(todo.id)}>
                    X
                </button>
              </div>
            </div>
  );
};

export default Todo;