import React, { useState } from "react";
import NotePopUp from "./NotePopUp";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hoverStyle = {
    boxShadow: "0 2px 5px #aaa",
  };

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <div className="div">
      <div
        className="note"
        onClick={handleShowModal}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={mouseOver ? hoverStyle : null}
      >
        <h1>{props.title}</h1>
        <p>
          {props.content.length > 200
            ? props.content.substring(0, 200) + " ..."
            : props.content}
        </p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
      <NotePopUp title={props.title} content={props.content} show={showModal} handleClose={handleCloseModal}/>
    </div>
  );
}

export default Note;
