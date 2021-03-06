import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText){
    setItems(prevItems => {
      return[...prevItems, inputText];
    })
  }

  function deleteItem(id){
    console.log(id);
    setItems(prevItems => {
      return prevItems.filter((item, index) =>{
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddItem={addItem} />
      {items.map((item, index) => ( 
      <Note key={index} id={index} title="Note title" content="Note content" items={item} deleteClicked={deleteItem}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;