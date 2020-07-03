import React from "react";
import IconList from "./IconList";
import CourtCard from "./CourtCard";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cityname: {
    marginTop: "20px",
    width: "70%",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div id="backgroundHome" className="background">
      <TextField
        className={classes.cityname}
        id="filled-search"
        label="CITYNAME"
        variant="filled"
      />

      <div id="divIconList">
        <IconList />
      </div>
    </div>
  );
};

export default Home;
