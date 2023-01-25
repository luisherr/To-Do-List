import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { Modal} from '../modal'
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoForm } from "../TodoForm/index.js";


function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return(
    <React.Fragment>
      {<TodoCounter/>}
      {<TodoSearch/>}

        <TodoList>
          {error && <p>Hubo un error</p>}
          {loading && <p>Estamos cargando</p>}
          {(!loading && searchedTodos.length) && <p>Crea tu primer To-DO</p>}
  
  
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}  
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      {<CreateTodoButton 
        setOpenModal={setOpenModal}
      />}
    </React.Fragment>
    );
}


export { AppUI };