import React, {useState} from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

 

  const handleChange =(event) =>{
    const {name, value} = event.target;
    setInputText({
      ...inputText,
      [name]: value,
    })
  }

  return (
    <div>
      <form onSubmit={(event) => {event.preventDefault();}}>
        <input name="title" placeholder="Title" onChange={handleChange} value={inputText.title}/>
        
        <textarea name="content" 
        placeholder="Take a note..." 
        rows="3" onChange={handleChange} 
        value={inputText.content}/>

        <button onClick={() => {
          props.onAddItem(inputText);
          setInputText({
          title: "",
          content: ""
          })
        }} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;