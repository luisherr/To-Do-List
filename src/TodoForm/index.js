import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
      };  

    const onCancel = () => {
        setOpenModal(false);
  };  
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
  };    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value={newTodoValue}
                onChange ={onChange}
                placeholder='Escribe una nueva tarea'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button-cancel'   
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button-add'
                    type='submit'
                >
                    Añadir Boton
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
