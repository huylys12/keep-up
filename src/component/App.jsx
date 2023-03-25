import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.title !== "" || newNote.content !== "") {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="wrapper d-flex align-items-stretch">
      {/* <Header /> */}
      <Sidebar />
      <div id="content" class="p-4 p-md-5 pt-5">
        <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        
      </div>

      
          

      {/* <Footer /> */}
    </div>
  );
}

export default App;
