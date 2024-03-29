import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteToDo(props) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6 paddingTop">{props.Name}</div>
        <div className="col-4 paddingTop">{props.Date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={() => props.deleteToDo(props.index)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
