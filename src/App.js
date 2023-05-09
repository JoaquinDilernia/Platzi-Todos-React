import './App.css';
import  TodoCounter from './components/TodoCounter';
import  TodoSearch  from './components/TodoSearch';
import  TodoList  from './components/TodoList';
import  TodoItem from './components/TodoItem';
import  CreateTodoButton  from './components/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LAlalala', completed: false },
]

function App() {
  return (
   <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}

      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
