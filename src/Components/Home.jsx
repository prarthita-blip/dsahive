import React from "react";
import Hives from "./Hives";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/homepage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Hives />
          </div>
          <div className="col-6">
            <div className="message-box">
              <h1>DSA HIVE</h1>
              <p
                style={{
                  fontFamily: "reross-quadratic,sans-serif",
                  fontWeight: "400",
                  fontSize: "normal",
                }}
              >
                Collection of Solutions of Famous DSA Question Sheets
              </p>
              <Link to="/collections" className="button">
                <span className="spanbtn">Collections</span>
              </Link>
              <Link to="/collections" className="button">
                <span className="spanbtn">Explore All</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
