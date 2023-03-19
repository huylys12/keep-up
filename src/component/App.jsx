import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Sidebar from "./Sidebar";
import {Row, Col } from "react-bootstrap";

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
    <div>
      <Header />
        <Row>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
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
          </Col>
        </Row>
      <Footer />
    </div>
  );
}

export default App;
