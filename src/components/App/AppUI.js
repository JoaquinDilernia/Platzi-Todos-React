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


const AppUI = () => {
    return (
        <>
            <TodoCounter  />
            <TodoSearch />
            <TodoContext.Consumer> 
            {({
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        }) => (
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
        )}
            
            </TodoContext.Consumer> 
            <CreateTodoButton />
        </>
        );
}

export default AppUI
