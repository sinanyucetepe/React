import {useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer'
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoItem = (text) => {
    const isDuplicate = todos.find(todo => todo.text === text.trim()); // check if there is a todo element with the same text
    if (isDuplicate) {
      alert('You already add this item!'); // show a warning message to the user if there is a todo element with the same text
      return;
    }
    setTodos((prev) => [
      ...prev, 
      
      {
        id: uuidv4(),
        text ,
        isCompleted: false,
      }
      
    ]);
  };

  const toggleTodoItem = (id) => {
    const findTodo =todos.find((todo) => todo.id === id);
    findTodo.isCompleted = !findTodo.isCompleted;
    setTodos(todos.map((todo) => (todo.id === id ? findTodo : todo )));
  };

  const deleteTodoItem = (id) =>{
    setTodos(todos.filter((todo) =>todo.id !== id  ));
  };


  const unCompletedlength = todos.filter((todo) => !todo.isCompleted).length;

  const onHandleChangeFilter = (filter) => setFilter(filter);

  const filteredTodos = todos.filter((todo) => {
    return filter === "active" 
      ? !todo.isCompleted 
      : filter ==="completed" 
      ? todo.isCompleted 
      : todo; 
  });

  const onHandleClearCompleted = () =>
  setTodos(todos.filter(todo => !todo.isCompleted));

  const onHandleToggleAll = () =>
   setTodos(todos.map(todo => ({...todo, isCompleted: true})))



  return (
  <section className="todoapp"> 
  <Header addTodoItem={addTodoItem} />
  <Main 
    todos={filteredTodos} 
    toggleTodoItem= {toggleTodoItem} 
    deleteTodoItem = {deleteTodoItem}
    onHandleToggleAll= {onHandleToggleAll}
    />
  <Footer 
    length={unCompletedlength}  
    onChangeFilter={onHandleChangeFilter}
    filter= {filter}
    clearCompleted= {onHandleClearCompleted}
    />
  </section>
  );
}

export default App;
