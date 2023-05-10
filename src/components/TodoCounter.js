import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({total , completed}) => {
  return (
    <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
  )
}

export default TodoCounter
