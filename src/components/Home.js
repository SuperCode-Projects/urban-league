import React from "react";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cityname: {
    height: "2.8em",
    backgroundColor: "white",
    borderRadius: "20px",
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
    </div>
  );
};

export default Home;
