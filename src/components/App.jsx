import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  // const [titleItems, setTitleItems] = useState([""]); //make it work with one useState
  // const [contentItems, setContentItems] = useState([""]);

  // function addTitle(title){
  //   setTitleItems(prevItems => {
  //     return [...prevItems, title]
  //   });
  // }

  // function addContent(content){
  //   setContentItems(prevItems => {
  //     return [...prevItems, content]
  //   });
  // }

  const [items, setItems] = useState([]);

  function addItem(inputText){
    setItems(prevItems => {
      return[...prevItems, inputText];
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAddItem={addItem} />
      {items.map((item, index) => ( 
      <Note key={index} title="Note title" content="Note content" items={item}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;