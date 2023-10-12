import React, { useState, useEffect } from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { axiosOpen } from "../../utilities/service";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import AddUser from "../AddUser/AddUser";
import DeleteUser from "../DeleteUser/DeleteUser";

const UserList = () => {
  const [dataLoader, setDataLoader] = useState(false);
  const [userList, setUserList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showpage, setShowPage] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  
  async function fetchData() {
    try {
      setDataLoader(true);
      const response = await axiosOpen.get("/users");
      const data = response?.data;
      setUserList(data);
      setDataLoader(false);
      toast.success("User List has been successfully loaded");
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (item) => {
    setUserToDelete(item);
    setShowConfirmation(true);
  };
  const handlePage = () => {
    setShowPage(false);
  };
  const handleAdd = () => {
    setShowPage(true);
    fetchData();
  };

  const confirmDeleteUser = async () => {
    try {
      const response = await axiosOpen.delete(`/users/${userToDelete}`);
      toast.success("User deleted successfully");
      setDataLoader(false)
      fetchData(); 
      setDataLoader(true)
    } catch (error) {
      toast.error("Error deleting user:", error.message);
    }
    setShowConfirmation(false);
  };

  const filteredUserList = userList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.username.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.email.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.website.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <div className="container my-5">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="d-flex justify-content-between">
          <h1 className="text-center fw-bold">User List</h1>
          <div className="d-flex" style={{ height: "4.4vh" }}>
            <input
              type="search"
              className="form-control me-3"
              placeholder="Search..."
              aria-label="Search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button className="btn btn-outline-success bg-opacity-50" onClick={handleAdd}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-fill-add"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
              </svg>
            </button>
          </div>
        </div>

        {filteredUserList?.length > 0 ? (
          <Table
            striped
            bordered
            hover
            responsive
            className="rounded text-center"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataLoader ? (
                <tr>
                  <td>
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUserList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>
                      <OverlayTrigger
                        key={item._id}
                        placement="bottom"
                        overlay={
                          <Tooltip
                            id={`tooltip-${item.id}`}
                            style={{ position: "fixed" }}
                          >
                            view user
                          </Tooltip>
                        }
                      >
                        <Link to={`/userdetail/${item.id}`}>
                          {item.username}
                        </Link>
                      </OverlayTrigger>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        ) : (
          <div className="user-table">
            <Table striped responsive className="text-center">
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <p>No matching users found.</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
        <AddUser show={showpage} handleClose={handlePage} />
        <DeleteUser
         show={showConfirmation}
         handleClose={() => setShowConfirmation(false)}
         confirmAction={confirmDeleteUser}
         />
      </div>
    </>
  );
};

export default UserList;
