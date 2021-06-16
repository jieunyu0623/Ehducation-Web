import React, { Fragment, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import QuestionBox from "../questions/QuestionBox";
import masterLogo from "./Badge_6_Master.png";
import granmasterLogo from "./Badge_7_Grandmaster.png";

const MyPage = () => {
  const [isNameChangeActive, setNameChange] = useState({
    disabled: true,
    value: "Name",
  });

  const onChange = (e) => {
    setNameChange({
      value: e.target.value,
    });
  };

  const handleClickAway = () => {
    setNameChange({
      disabled: true,
      value: isNameChangeActive.value,
    });
    console.log(isNameChangeActive.value);
  };

  const toggle = () => {
    setNameChange({
      disabled: false,
      value: isNameChangeActive.value,
    });
  };
  return (
    <Fragment>
      <div className="myPageContainer">
        <div className="myPageLeftPane">
          <div className="nameContainer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <ClickAwayListener
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
                onClickAway={handleClickAway}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    className="myPageNameField"
                    type="text"
                    disabled={isNameChangeActive.disabled}
                    value={isNameChangeActive.value}
                    onChange={onChange}
                  />
                  <button onClick={toggle} className="editNameMyPage">
                    <i
                      className="fas fa-pen"
                      style={{
                        padding: "3px",
                        fontFamily: "FontAwesome",
                        cursor: "pointer",
                        fontSize: "10px",
                      }}
                    ></i>
                  </button>
                </div>
              </ClickAwayListener>
              <img
                src={masterLogo}
                alt="masterLogo"
                style={{ width: "90px", height: "90px", marginLeft: "34px" }}
              />
              <p style={{ fontSize: "20px", marginTop: "-2px" }}>
                <b>3870</b>
              </p>
            </div>
          </div>
          <br />
          <div className="expBarContainer">
            <div className="expBar"></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "auto",
              width: "300px",
              marginTop: "5px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={masterLogo}
                alt="master"
                style={{ width: "50px", height: "50px" }}
              />
              <p style={{ fontSize: "18px", marginTop: "3px" }}>
                <b>3500</b>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              <img
                src={granmasterLogo}
                alt="granmaster"
                style={{ width: "50px", height: "50px" }}
              />
              <p style={{ fontSize: "18px", marginTop: "3px" }}>
                <b>4000</b>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "auto",
              width: "200px",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "25px" }}>
                <b>158</b>
              </p>
              <p style={{ fontSize: "20px", marginTop: "-10px" }}>Answered</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "25px" }}>
                <b>37</b>
              </p>
              <p style={{ fontSize: "20px", marginTop: "-10px" }}>Starred</p>
            </div>
          </div>
          <button className="logoutButton">Log out</button>
        </div>
        <div className="myPageRightPane">
          <button className="myPageQuestionButton">
            <p style={{ fontSize: "20px" }}>
              <b>My Questions</b>
            </p>
          </button>
          <button className="myPageAnswerButton">
            <p style={{ fontSize: "20px" }}>
              <b>My Answers</b>
            </p>
          </button>
          <QuestionBox />
          <br></br>
          <QuestionBox />
          <br></br>
          <QuestionBox />
        </div>
      </div>
    </Fragment>
  );
};

export default MyPage;
