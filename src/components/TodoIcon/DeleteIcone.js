import React from 'react';
import  TodoIcon from './index';


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

