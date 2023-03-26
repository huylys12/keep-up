import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import Cookies from "js-cookie";

function NoteContent(props) {
  const [notes, setNotes] = useState([]);
  // axios
  //   .post("http://localhost:8000/api/v1/accounts/login", {
  //     username: "user2",
  //     password: "huyly",
  //   })
  //   .then((response) => {
  //     const cookie = response.headers;
  //     console.log(cookie);
  //     // const connectSid = cookie.split(";")[0].split("=")[1];
      
  //     // Cookies.set("connect.sid", connectSid, { path: "/" });
  //     axios
  //       .get("http://localhost:8000/api/v1/notes/", {
  //         withCredentials: true,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

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
  );
}

export default NoteContent;
