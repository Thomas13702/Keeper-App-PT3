import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.items.title}</h1>
      <p>{props.items.content}</p>
      <button onClick={() => {
        props.deleteClicked(props.id)
      }}
      >DELETE</button>
    </div>
  );
}

export default Note;