import React, { useState } from 'react'
import AddToDo from './AddToDo'
import DeleteToDo from './DeleteToDo'
import './App.css';

export default function App() {
  const [toDoData, setToDoData] = useState([]);

  const setTodoDataInArray = (item, date) => {
    if (item !== "" && date !== "")
      setToDoData([...toDoData, { Name: item, date: date }]);
  }

  const deleteToDo = (index) => {
    const newArray = [...toDoData];
    newArray.splice(index, 1)
    setToDoData([...newArray]);
  }

  return (
    <center className='todo-container'>
      <h1>TODO App</h1>
      <AddToDo setTodoDataInArray={setTodoDataInArray} />
      {toDoData.map((item, index) => {
        return <DeleteToDo key={index} index={index} Name={item.Name} Date={item.date} deleteToDo={deleteToDo} />
      })}
    </center>
  )
}
