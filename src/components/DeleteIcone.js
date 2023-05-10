import React from 'react';
import  TodoIcon from './TodoIcon';


const DeleteIcone = ({ onDelete }) => {
  return (
        <TodoIcon
          type="delete"
          color="gray"
          onClick={onDelete}
        />
  )
}

export default DeleteIcone

