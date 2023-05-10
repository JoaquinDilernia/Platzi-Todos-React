import React from 'react'
import './App.css';
import  TodoCounter from '../TodoCounter/index';
import  TodoSearch  from '../TodoSearch/index';
import  TodoList  from '../TodoList/index';
import  TodoItem from '../TodoItem/index';
import  CreateTodoButton  from '../CreateTodoButton/index';
import TodosError  from '../TodosError/index';
import TodosLoading  from '../TodosLoading/index';
import EmpyTodos  from '../EmpyTodos/index';
import { TodoContext } from '../TodoContext/index';
import {Modal} from '../Modal/index';


const AppUI = () => {

    const{
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal} = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter  />
            <TodoSearch />
            <TodoList>
            {loading && (
            <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
            </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmpyTodos />}
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
        <CreateTodoButton />
        {openModal && (
        <Modal>
            <p>Esto es un modal</p>
        </Modal>
        )}
        </>
        );
}

export default AppUI
