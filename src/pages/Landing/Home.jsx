import React from "react";
import logo1 from "../../assets/ReactLogo.png";
import logo2 from "../../assets/BootstrapLogo.png";
const Home = () => {
  return (
    <>
      <div className="container my-5 ">
        <section
          className="d-flex justify-content-center align-items-center"
          style={{ height: "66vh" }}
        >
          <h1 className="">Welcome to the Test Project</h1>
        </section>

        <div className="row featurette my-5">
          <div className="col-md-7 ">
            <h2 className="featurette-heading fw-bolder lh-1">React JS</h2>
            <p className="lead mt-4">
              React is a popular JavaScript library for building user
              interfaces. Developed by Facebook, it simplifies the creation of
              interactive and dynamic web applications. React utilizes a
              component-based architecture, where you design UI elements as
              reusable components, making it easier to manage and update your
              application. It efficiently updates the DOM, improving performance
              and user experience.
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img src={logo1} width={400} height={300} alt="" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette my-5">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-bolder lh-1">Bootstrap</h2>
            <p className="lead mt-4">
              Bootstrap is a popular open-source front-end framework for web
              development. Developed by Twitter, it offers a collection of
              pre-designed, responsive HTML, CSS, and JavaScript components and
              templates that simplify the creation of attractive and consistent
              web interfaces. Bootstrap provides a grid system for layout,
              typography, forms, buttons, navigation bars, and more, making it
              easy to design mobile-friendly and visually appealing websites.
            </p>
          </div>
          <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
            <img src={logo2} width={300} height={200} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
