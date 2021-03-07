import React, {useState} from "react";

function CreateArea(props) {
  // const [title, setTitle] = useState(""); //make it work with one useState
  // const [content, setContent] = useState("");

  // function handleTitle(event) {
  //   const newTitle = event.target.value;
  //   setTitle(newTitle);    
  // }

  // function handleContent(event) {
  //   const newContent = event.target.value;
  //   setContent(newContent);
  // }

  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  // function handleChange(event){
  //   const newTitle = event.target.title;
  //   const newContent = event.target.content;
  //   setInputText({
  //     title: newTitle,
  //     content: newContent
  //   });
  // }

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