import React, { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

export default function AddToDo({ setTodoDataInArray }) {
  const inputName = useRef();
  const inputDate = useRef();

  function handleClick() {
    const newName = inputName.current.value;
    const newDate = inputDate.current.value;
    inputName.current.value = "";
    inputDate.current.value = "";
    setTodoDataInArray(newName, newDate);
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6 paddingTop">
          <input type="text" placeholder="input todo here" ref={inputName} />
        </div>
        <div className="col-4 paddingTop">
          <input type="date" ref={inputDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClick}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
