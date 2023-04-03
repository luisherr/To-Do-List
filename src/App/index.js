import React from 'react';
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader"
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { Modal} from '../modal'
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { ChangeAlert } from "../ChangeAlert";


 function App() {
  const {
    stateUpdates,
    state,
  } = useTodos();

  const {
    error, 
    loading, 
    searchedTodos, 
    totalTodos,
    completeTodo, 
    completedTodos,
    openModal,
    searchValue, 
  } = state;

  const {
    setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdates;


  return(
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>}
      >
        {todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      <ChangeAlert 
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
    );
 }

export default App;
