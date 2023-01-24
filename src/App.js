import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
//import './App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Tomar cursp', completed: false },
  { text: 'Llorar con la llorona', completed: false }
];

function App() {
  //Estado Inicial de To Do
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  //cantidad de To Do completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //cantidad total de To Do
  const totalTodos = todos.length; 

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const   deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };



  return (
    <React.Fragment>
      {<TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />}
      {<TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />}
      {<TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}  
      </TodoList> }
      {<CreateTodoButton />}
      <button></button>
    </React.Fragment>
  );
}

export default App;
