import './App.css';
import  TodoCounter from './components/TodoCounter/index';
import  TodoSearch  from './components/TodoSearch/index';
import  TodoList  from './components/TodoList/index';
import  TodoItem from './components/TodoItem/index';
import  CreateTodoButton  from './components/CreateTodoButton/index';
import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}



function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
  const textTodo = todo.text.toLowerCase();
  const searchText = searchValue.toLowerCase();
  return textTodo.includes(searchText);
});

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

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

export default App;
