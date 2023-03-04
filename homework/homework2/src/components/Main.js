import React from 'react';

const Main = ({ todos, toggleTodoItem, deleteTodoItem, onHandleToggleAll }) => {
  const handleToggleAll = () => {
    onHandleToggleAll();
  };

  return (
    <section className="main">
      <input 
        property="toggleAll" 
        id="toggle-all"
        className="toggle-all" 
        type="checkbox"
        onClick={handleToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete </label>
      <ul className="todo-list">
        {
          todos.map((todo) => (
            <li className={todo.isCompleted ? "completed" : ""} key={todo.id}>
              <div className="view">
                <input 
                  property="done" 
                  className="toggle" 
                  type="checkbox" 
                  checked={todo.isCompleted}
                  onChange={() => toggleTodoItem(todo.id)}
                />
                <label property="text">{todo.text}</label>
                <button 
                  className="destroy" 
                  onClick={() => deleteTodoItem(todo.id)}
                />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Main;
