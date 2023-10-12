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
    try {
      // Send a POST request to create a new user
      // Replace the URL with the actual API endpoint for user creation
      // The user data is in the `userData` state
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
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={userData.website}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add User
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddUser;
