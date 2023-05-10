import React from 'react'
import './App.css';
import  TodoCounter from '../TodoCounter/index';
import  TodoSearch  from '../TodoSearch/index';
import  TodoList  from '../TodoList/index';
import  TodoItem from '../TodoItem/index';
import  CreateTodoButton  from '../CreateTodoButton/index';

const AppUI = ({
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    completeTodo, 
    deleteTodo }) => {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            <TodoList>
                {searchedTodos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}  onComplete={()=> completeTodo(todo.text)}  onDelete={()=> deleteTodo(todo.text)}/>
                ))}
        
            </TodoList>
            <CreateTodoButton />
        </>
        );
}

export default AppUI
