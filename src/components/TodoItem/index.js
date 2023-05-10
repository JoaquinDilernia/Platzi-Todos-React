import React from 'react'
import './TodoItem.css'
import CompleteIcon from '../TodoIcon/CompleteIcone'
import DeleteIcon from '../TodoIcon/DeleteIcone'

const TodoItem = (props) => {
  return (

<li className="TodoItem"><CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
<p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>{props.text}</p>
<DeleteIcon onDelete={props.onDelete}/></li>

)
}

export default TodoItem
