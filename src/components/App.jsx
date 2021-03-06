import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [titleItems, setTitleItems] = useState([]);
  const [contentItems, setContentItems] = useState([]);

  function addTitle(title){
    setTitleItems(prevItems => {
      return [...prevItems, title]
    });
  }

  function addContent(content){
    setContentItems(prevItems => {
      return [...prevItems, content]
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAddTitle={addTitle} onAddContent={addContent} />
      {titleItems.map((titleItem, index) => ( 
      <Note key={index} title="Note title" content="Note content" title={titleItem} content={contentItems}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;