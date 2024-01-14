import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

export default function AddToDo(props) {
  const [item, setItem] = useState();
  const [date, setDate] = useState();

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6 paddingTop">
          <input
            type="text"
            placeholder="input todo here"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="col-4 paddingTop">
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.setTodoDataInArray(item, date);
              setItem("");
              setDate("");
            }}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
