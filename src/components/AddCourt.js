import React, { Component } from "react";
import "./SignUp.css";
import "./CourtDetails.css";
import TextField from "@material-ui/core/TextField";
import IconList from "./IconList";
import "./AddCourt.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";


import Geocode from "react-geocode";
import { GoogleAPIkey } from "../key";

Geocode.setApiKey(`${GoogleAPIkey}`);


class AddCourt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameNewCourt: "",
      addressNewCourt: "",
      descriptionNewCourt: "",
      locationNewCourt: { lat: 0, lng: 0 },
      courtCheckedIn: 0
    };
    this.nameChange = this.nameChange.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.geocodingAddress = this.geocodingAddress.bind(this);
    this.addNewCourt = this.addNewCourt.bind(this);
  }

  nameChange = (event) => {
    this.setState({ nameNewCourt: event.target.value });
  };

  addressChange = (event) => {
    this.setState({ addressNewCourt: event.target.value });
  };

  descriptionChange = (event) => {
    this.setState({ descriptionNewCourt: event.target.value });
  };

  geocodingAddress = () => {
    Geocode.fromAddress(`${this.state.addressNewCourt}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ locationNewCourt: { lat: lat, lng: lng } }, () => {console.log(this.state.locationNewCourt, lat, lng)});
      },
      (error) => {
        console.error(error);
      }
    );
    return;
  };

  addNewCourt = () => {
    this.geocodingAddress();
    const idNewCourt = global.config.courtList.length + 1;
    console.log(idNewCourt);
    setTimeout(() => {
      console.log(this.state.locationNewCourt);
      const newCourt = {
        id: idNewCourt,
        courtName: this.state.nameNewCourt,
        courtAddress: this.state.addressNewCourt,
        location: this.state.locationNewCourt,
        courtDescription: this.state.descriptionNewCourt,
        courtImage: "https://source.unsplash.com/random/300x200?" + `${this.state.nameNewCourt}`,
        courtType: 0,
        courtSurface: 0,
        courtLevelOfLiking: 4,
        courtNumberOfPersonLiked: 0,
        courtCheckedIn: 0}
      global.config.courtList.push(newCourt);
      console.log(newCourt)
    }, 1000);
  }

  componentDidMount(){
    this.geocodingAddress();
    this.addNewCourt();
  }

  render () {
  return (
    <div className="background">
      <div className="greenWithPic">
        <div id="text">
          <Link to="/">
            <Button
              size="small"
              variant="contained"
              type="submit"
              id="myLocation"
            >
              BACK
            </Button>
          </Link>
          <p className="p_big">New Court</p>

          <Button
            size="small"
            variant="contained"
            type="submit"
            id="myLocation"
            onClick={()=>{this.addNewCourt()}}
          >
            SAVE
          </Button>
        </div>
        <div id="Pic_round">
          <div id="halfcircle">
            <p> + PICTURE</p>
          </div>
        </div>
      </div>
      <div id="formSignUp">
        <TextField id="filled-basic" label="Name" variant="outlined" onChange={this.nameChange} value={this.state.nameNewCourt}/>
        <TextField id="filled-basic" label="Adress" variant="outlined" onChange={this.addressChange} value={this.state.addressNewCourt}/>
        <TextField id="filled-basic" label="Description" variant="outlined" onChange={this.descriptionChange} value={this.state.descriptionNewCourt}/>
      </div>
      <h4>POSSIBLE SPORTS</h4>
      <IconList />
      <div id="newsletter-check"></div>
      <h4>DETAILS</h4>

      <div id="buttonList" className="buttonList_newCourt">
        <button className="buttonGreen">Natural Grass</button>
        <button className="buttonGreen">Concrete</button>
        <button className="buttonGreen">Rubber</button>
      </div>

      <div id="buttonList" className="buttonList_newCourt">
        <button className="buttonGreen">Artificial Grass</button>
        <button className="buttonGreen">Sand</button>
        <button className="buttonGreen">Other</button>
      </div>
      {/* <h4>SIZE</h4>
      <div id="sizeField">
        <TextField id="filled-basic" label="Lenght" variant="outlined" />
        <TextField id="filled-basic" label="Width" variant="outlined" />
      </div> */}
    </div>
  );
  }
};

export default AddCourt;
