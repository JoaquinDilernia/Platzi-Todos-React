import React from 'react'
import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue,}) => {

    return (
<input
    placeholder="Cortar cebolla"
    className="TodoSearch"
    value={searchValue}
    onChange={(event) => {
        setSearchValue(event.target.value);
    }}
    />
)
}

export default TodoSearch
