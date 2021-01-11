import React, { useState } from "react";
import "./TodoList.css";
import CurrentDate from "../CurrentDate/CurrentDate";
import AddItem from "../AddItem/AddItem";
import Item from "../Item/Item";

function TodoList() {

  const [items, setItems] = useState(['Buy eggs', 'Cook breakfast', 'Do homework']);
  const [addItemInputVal, setAddItemInputVal] = useState('');

  const handleAddInput = event => {
    if (event.key === 'Enter') {
      setItems([...items, event.target.value]);
      setAddItemInputVal('');
    } 
  }

  const handleValueChange = event => {
    setAddItemInputVal(event.target.value);
  }

  const handleDelete = (task) => {
     const filteredItems = items.filter(item => item !== task) ;
     setItems(filteredItems);
  }

  return (
    <div className="TodoList">
      <CurrentDate />
      <AddItem handleEnter={handleAddInput} handleValue={handleValueChange} value={addItemInputVal}/>
      <div>
        {items.map((item, index) => (
          <Item key={index} task={item} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
