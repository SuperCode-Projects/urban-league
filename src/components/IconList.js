import React, { Component } from "react";
import "./IconList.css";

class IconList extends Component {

constructor(props) {
  super(props);
  this.state = {
    selectedCourtType: 0
  };
  this.selectCourtType = this.selectCourtType.bind(this);
}

selectCourtType = (courtType) => {
  console.log(courtType);
  this.setState({selectedCourtType: courtType}, () => {console.log(this.state.selectedCourtType)}); 
}

componentDidMount(){
  this.selectCourtType();
}

  render () {
    return (
      <div id="iconlist">
        <button onClick={() => this.selectCourtType(0)}><img src="./images/icons/icon_basketball.png" alt="icon basketball"/></button>
        <button onClick={() => this.selectCourtType(1)}><img src="./images/icons/icon_soccer.png" alt="icon soccer"/></button>
        <button onClick={() => this.selectCourtType(2)}><img src="./images/icons/icon_volleyball.png" alt="icon volleyball"/></button>
        <button onClick={() => this.selectCourtType(3)}><img src="./images/icons/icon_ping-pong.png" alt="icon ping-pong"/></button>
        <button onClick={() => this.selectCourtType(4)}><img src="./images/icons/icon_dart.png" alt="icon dart"/></button>
      </div>
    );
  }
};

export default IconList;
