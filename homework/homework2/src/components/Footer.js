import React from 'react'

function Footer({length, onChangeFilter, filter, clearCompleted} ) {
  return (
  <footer  className="footer">
    <span className="todo-count"><strong mv-value="todoLeft">{length} </strong>left</span>
    <ul className="filters">
        <li onClick={() => onChangeFilter("all")} >
            <span className={filter === "all" ? "selected" : ""}> All </span>
        </li>
        <li onClick={() => onChangeFilter("active")} >
            <span className={filter === "active" ? "selected" : ""}>Active</span>
        </li>
        <li onClick={() => onChangeFilter("completed")} >
            <span className={filter === "completed" ? "selected" : ""}>
            Completed
            </span>
        </li>
    </ul>
    <button className="clear-completed" onClick={clearCompleted}> Clear completed </button>
    </footer>
  );
};

export default Footer
