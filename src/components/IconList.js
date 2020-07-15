import React, { Component } from "react";
import "./IconList.css";
import CourtConsumer from "../CourtProvider";
import { courtList } from "../config";

class IconList extends Component {
  selectCourtType0 = (dispatch) => {
    dispatch({ type: "SELECT_COURT_TYPE", payload: 0 });
  };

  selectCourtType1 = (dispatch) => {
    dispatch({ type: "SELECT_COURT_TYPE", payload: 1 });
  };

  selectCourtType2 = (dispatch) => {
    dispatch({ type: "SELECT_COURT_TYPE", payload: 2 });
  };

  selectCourtType3 = (dispatch) => {
    dispatch({ type: "SELECT_COURT_TYPE", payload: 3 });
  };

  selectCourtType4 = (dispatch) => {
    dispatch({ type: "SELECT_COURT_TYPE", payload: 4 });
  };

  render() {
    return (
      <CourtConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div id="iconlist">
              <button onClick={this.selectCourtType0.bind(this, dispatch)}>
                <img
                  src="./images/icons/icon_basketball.png"
                  alt="icon basketball"
                />
              </button>
              <button onClick={this.selectCourtType2.bind(this, dispatch)}>
                <img src="./images/icons/icon_soccer.png" alt="icon soccer" />
              </button>
              <button onClick={this.selectCourtType1.bind(this, dispatch)}>
                <img
                  src="./images/icons/icon_volleyball.png"
                  alt="icon volleyball"
                />
              </button>
              <button onClick={this.selectCourtType3.bind(this, dispatch)}>
                <img
                  src="./images/icons/icon_ping-pong.png"
                  alt="icon ping-pong"
                />
              </button>
              <button onClick={this.selectCourtType4.bind(this, dispatch)}>
                <img src="./images/icons/icon_dart.png" alt="icon dart" />
              </button>
            </div>
          );
        }}
      </CourtConsumer>
    );
  }
}

export default IconList;
