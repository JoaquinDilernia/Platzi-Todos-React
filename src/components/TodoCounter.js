import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({total , completed}) => {
  return (
    <h1>Has completado {completed} de {total} TODOs</h1>
  )
}

export default TodoCounter
