import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [expandedRow, setExpandedRow] = useState(1);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {    
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpandedRow(1);
    event.preventDefault();
  }

  function expand() {
    setExpandedRow(3);
  }

  return (
    <div>
      <form className="create-note">
        {expandedRow !== 1 && (
          <input
            className="bold"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            maxLength={100}
          />
        )}

        <textarea
          name="content"
          className="scrollable-content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expandedRow}
        />
        <Zoom in={expandedRow !== 1}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
