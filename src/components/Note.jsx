import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.item.title}</h1>
      <p>{props.item.content}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;
