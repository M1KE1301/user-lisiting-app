import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { axiosOpen } from "../../utilities/service";

const AddUser = ({ show, handleClose }) => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !userData.name ||
      !userData.username ||
      !userData.email ||
      !userData.phone ||
      !userData.website
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await axiosOpen.post("/users", userData);
      toast.success("User added successfully");
      setUserData({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
      handleClose();
    } catch (error) {
      toast.error("Error adding user:", error);
    }
  };

  const handlePhoneInput = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[^0-9+]/g, "");
    setUserData({
      ...userData,
      [name]: sanitizedValue,
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handlePhoneInput}
                
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formWebsite">
              <Form.Label className="fw-bold">Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={userData.website}
                onChange={handleInputChange}
              />
            </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add User
            </Button>
          </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddUser;
