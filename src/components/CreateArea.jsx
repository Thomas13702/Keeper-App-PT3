import React, {useState} from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);    
    }

  function handleContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
    
  }

  return (
    <div>
      <form onSubmit={(event)=>{event.preventDefault();}}>
        <input name="title" placeholder="Title" onChange={handleTitle} value={title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleContent} value={content}/>
        <button onClick={() => {
          props.onAddTitle(title);
          props.onAddContent(content);
          setTitle("");
          setContent("");
        }} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
