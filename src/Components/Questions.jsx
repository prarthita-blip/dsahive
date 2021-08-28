import React, { useEffect, useState } from "react";
import Sdesheet from "../Components/Databases/Sdesheet";
import Footer from "./Footer";
import QuestionTemplate from "./QuestionTemplate";
import "./Styles/questions.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Forkpython from "./Databases/Forkpython";
import Forkcpp from "./Databases/Forkcpp";
import Forkjava from "./Databases/Forkjava";
const Questions = ({ match }) => {
  let x = match.params.sheetname;
  const [data, setData] = useState([]);
  const [value, setValue] = useState(6);
  const [startday, setStartday] = useState(0);
  useEffect(() => {
    if (x === "Sde sheet") setData(Sdesheet);
    if (x === "fork python") setData(Forkpython);
    if (x === "fork cpp") setData(Forkcpp);
    if (x === "fork java") setData(Forkjava);
  }, [x]);
  const PrettoSlider = withStyles({
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      fontSize: 3,
    },

    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  const getSliderValue = (event, value) => {
    setValue(value);
  };

  return (
    <div className="QuesPage">
      <div className="lol">
        <h1 className="text-center collHead">{x} </h1>
      </div>
      <div className="row qpjt">
        <div className="col-8">
          <div className="rangeSlider">
            <div>No. of Question to Solve Per Day</div>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="custom thumb label"
              defaultValue={value}
              min={1}
              max={15}
              onChange={getSliderValue}
            />
          </div>
        </div>

        <div className="col-4">
          <div className="jumpto"></div>
          <div className="search-container">
            <div className="search-icon-btn">Day</div>
            <div className="search-input">
              <input
                type="number"
                min="1"
                max="35"
                className="search-bar"
                placeholder="Jump to Day"
                onChange={(e) => setStartday(e.target.value - 1)}
              />
            </div>
          </div>
        </div>
      </div>
      {data.length > 0
        ? (() => {
            let ans = [];
            let i;
            if (startday > 0) {
              i = startday * value;
            } else {
              i = 0;
            }
            for (; i < data.length; i++)
              ans.push(
                <>
                  {i % value === 0 ? (
                    <h2 className="text-center text-white mt-4">
                      Day {i / value + 1}
                    </h2>
                  ) : (
                    ""
                  )}

                  <QuestionTemplate
                    key={i}
                    name={data[i].name}
                    level={data[i].level}
                    topic={data[i].topic}
                    link={data[i].link}
                    video={data[i].video}
                    sol={data[i].sol}
                  />
                </>
              );
            ans.push(<div style={{ height: "15vh" }}></div>);

            return ans;
          })()
        : ""}

      <Footer />
    </div>
  );
};

export default Questions;
