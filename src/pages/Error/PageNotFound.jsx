import React from "react";
import "./Error.css";

const PageNotFound = () => {
  return (
    <>
      <div className="main-container">
        <main className="main-content main-content.sm main-content.lg">
          <div className="text-section">
            <p className="error-code">404</p>
            <h1 className="error-title error-title.sm">Page not found</h1>
            <p className="error-description">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="button-container">
              <a href="/list" className="home-button">
                Go back home
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PageNotFound;
