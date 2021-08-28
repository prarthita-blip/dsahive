import React from "react";
import "./Styles/questions.css";

const QuestionTemplate = (props) => {
  const topicColor = (level) => {
    if (level === "Easy") return { color: "#00FF00" };
    if (level === "Medium") return { color: "#ebb400" };
    if (level === "Hard") return { color: "#c22802" };
  };
  return (
    <div>
      <div className="lol">
        <div className="quesHead">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-12 quesName pt-3">{props.name}</div>
                </div>
                <div className="row">
                  <div className="col-4">
                    {" "}
                    <div className="difficulty" style={topicColor(props.level)}>
                      {props.level}
                    </div>{" "}
                  </div>
                  <div className="col-4"></div>
                  <div className="col-4">
                    {" "}
                    <div className="topic">{props.topic}</div>{" "}
                  </div>
                </div>
              </div>
              <div className="col-4 ">
                <div className="row">
                  <div className="col-3 mt-3">
                    <a
                      className="slider slider-left Ques"
                      href={props.link}
                      target="_blank"
                      title="Question"
                      rel="noreferrer"
                    >
                      <div className="slide-1 Q V">
                        <span className="fi-social-facebook">
                          <i className="fas fa-code"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col-3 mt-3">
                    <a
                      className="slider slider-right Vid"
                      href={props.video}
                      title="Video"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="slide-1 Q V">
                        <span className="fi-social-youtube">
                          {/* <i className="fab fa-youtube "></i> */}
                          Vid
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col-3 mt-3">
                    <a
                      className="slider slider-left Ques"
                      href={props.sol}
                      title="C++"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="slide-1 Q">
                        <span className="fi-social-facebook ">
                          {/* <i class="fab fa-github "></i> */}
                          C++
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col-3 mt-3">
                    <a
                      className="slider slider-left Ques"
                      href="#"
                      title="Java"
                    >
                      <div className="slide-1 Q">
                        <span className="fi-social-facebook ">
                          {/* <i class="fab fa-github "></i> */}
                          Java
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionTemplate;
