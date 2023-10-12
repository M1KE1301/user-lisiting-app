import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteUser = ({ show, handleClose, confirmAction }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to perform this action?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => { confirmAction(); handleClose(); }}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteUser;