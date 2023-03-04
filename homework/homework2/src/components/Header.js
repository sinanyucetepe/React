import React from 'react'
import {useState} from "react";

const Header = ({ addTodoItem })  =>  {

    const [keywords, setKeywords] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (keywords.trim() === '') { // check to input for empty 
        return;}
        
        addTodoItem(keywords)
        setKeywords("");

    };

  return (
  <header class="header">
    <h1>todos</h1>
        <form onSubmit={onSubmit}>
        <input property="newTodo" class="new-todo"
               placeholder="What needs to be done?"
               autofocus
               value={keywords}
               onChange={(event) => setKeywords(event.target.value)}
            />
        </form>
    </header>
  );
};

export default Header
