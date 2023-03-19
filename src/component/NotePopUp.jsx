import React from "react";
import { Modal, Button} from "react-bootstrap";

function NotePopUp(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <form className="create-note">
          <input
            name="title"
            className="bold"
            // onChange={handleChange}
            value={props.title}
            placeholder="Title"
            maxLength={100}
          />

          <textarea
            name="content"
            // onChange={handleChange}
            value={props.content}
            placeholder="Take a note..."
            // rows={expandedRow}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotePopUp;
