import React from "react";

export default function DeleteToDo(props) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{props.Name}</div>
        <div className="col-4">{props.Date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={() => props.deleteToDo(props.index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
