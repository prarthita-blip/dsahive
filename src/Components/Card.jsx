import React from "react";
import "./Styles/card.css";
import logo from "./DSA HIVE2.png";
import { Link, useHistory } from "react-router-dom";
const Card = (props) => {
  let colour = "white";
  const history = useHistory();
  if (props.description === "Coming Soon.......") {
    colour = "#0faa01";
  }
  const goTo = () => {
    if (props.link === "nil") return;
    else history.push(`questions/${props.link}`);
  };
  return (
    <div>
      <Link className="button1" onClick={goTo}>
        <div className="card">
          <div className="content">
            <img className="logo" src={logo} alt="logo.." />
            <h2 className="title">{props.name}</h2>
            <p className="copy" style={{ color: colour }}>
              {props.description}
            </p>
            {/* {props.link === "nil" ? (
              <Link
                className="button"
                to={`questions/${props.link}`}
                onClick={(event) => event.preventDefault()}
                disabled={true}
              >
                <span className="spanbtn">Coming Soon!</span>
              </Link>
            ) : (
               <span className="spanbtn">Lets Start!</span> 
            )} */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
