import React from "react";

const Footer = () => {
  return <>
  <footer className="footer fixed-bottom mt-auto">
    <div className="d-flex justify-content-center bg-dark text-white ">
    © {(new Date().getFullYear())} Built Using React JS , Bootstrap 
    </div>
    </footer>
  </>
};

export default Footer;
