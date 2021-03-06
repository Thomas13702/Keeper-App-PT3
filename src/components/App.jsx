import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItems] = useState([
    {
      title: "",
      content:""
    }
  ]);

  function addItem(input){
    setItems(prevItems => {
      return [...prevItems,
      {
      title: input.title,
      content: input.content
    }]})
    console.log(items);
  }

  


  return (
    <div>
      <Header />
      <CreateArea onAddTitle={addItem} onAddContent={addItem} submits={addItem}/>
      {items.map((item, index) => ( 
      <Note key={index} title="Note title" content="Note content" item={item}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
