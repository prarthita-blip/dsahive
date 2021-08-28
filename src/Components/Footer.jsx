import React from "react";
import "./Styles/footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-copyright text-center">
          Developed by
          <a
            className="white-text"
            target="_blank"
            href="https://soham-official.github.io/"
            rel="noreferrer"
          >
            {" "}
            Soham{" "}
          </a>
          ,
          <a
            className="white-text"
            target="_blank"
            href="https://www.linkedin.com/in/srinjoy-pal-36a076183/"
            rel="noreferrer"
          >
            {" "}
            Srinjoy{" "}
          </a>
          and
          <a
            className="white-text"
            target="_blank"
            href="https://www.linkedin.com/in/prarthita-samadder-4371461bb"
            rel="noreferrer"
          >
            {" "}
            Prarthita{" "}
          </a>
          <br />
          &copy; All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
