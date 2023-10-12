import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { axiosOpen } from "../../utilities/service";
import {
  Card,
  Container,
  Spinner,
  CardBody,
  Button,
  Accordion
} from "react-bootstrap";
import EditUser from "../EditUser/EditUser";

const UserDetails = () => {
  const [dataLoader, setDataLoader] = useState(true);
  const [userDetail, setUserDetail] = useState(null);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const userId = id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosOpen.get(`/users/${userId}`);
        const data = response?.data;
        setUserDetail(data);
        setDataLoader(false);
        toast.success("User Successfully loaded");
      } catch (error) {
        setDataLoader(false);
        toast.error(error.message);
      }
    };

    fetchData();
  }, [userId]);
  const handleClose = () => setShow(false);
  const handleShow = () =>  setShow(true);
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Container fluid className="my-5 ">
        <div className="row">
          <div className="col">
            <h1 className="text-center">
              {userDetail ? `${userDetail.name}` : "No User Found"}
            </h1>
          </div>
         
        </div>
        
        <div className="d-flex justify-content-center">
          <Card className="w-50">
            <CardBody>
              {dataLoader ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                userDetail && (
                  <div className="text-center">
                    
                    <Accordion className="mb-4 " >
                      <p>
                      <b>Name</b>: {userDetail.name}
                    </p>
                    <p>
                      <b>UserName</b>: {userDetail.username}
                    </p>
                    <p>
                      <b>Email</b>: {userDetail.email}
                    </p>
                    <p>
                      <b>Website</b>: {userDetail.website}
                    </p>
                    <p>
                      <b>Phone</b>: {userDetail.phone}
                    </p>
                      <Accordion.Item eventKey="0" className="border-0 mb-4" style={{paddingLeft:"33%",paddingRight:"33%"}}>
                        <Accordion.Header> <b>Address</b></Accordion.Header>
                        <Accordion.Body>
                          <p>
                            <b>Street</b>: {userDetail.address.street}
                          </p>
                          <p>
                            <b>Suite</b>: {userDetail.address.suite}
                          </p>
                          <p>
                            <b>City</b>: {userDetail.address.city}
                          </p>
                          <p>
                            <b>Zipcode</b>: {userDetail.address.zipcode}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="border-0" style={{paddingLeft:"33%",paddingRight:"33%"}}>
                        <Accordion.Header> <b>Company</b></Accordion.Header>
                        <Accordion.Body>
                          <p>
                            <b>Name</b>: {userDetail.company.name}
                          </p>
                          <p>
                            <b>Catch Phrase</b>: {userDetail.company.catchPhrase}
                          </p>
                          <p>
                            <b>BS</b>: {userDetail.company.bs}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className="row">
                      <div className="col">
                        <div className="d-flex justify-content-center">
                          <Button variant="primary" onClick={handleShow}>Edit User</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </CardBody>
          </Card>
        </div>
      </Container>
      <EditUser show={show} userId={userId} handleClose={handleClose}/>
    </>
  );
};

export default UserDetails;
