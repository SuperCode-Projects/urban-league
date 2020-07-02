import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import CourtCard from "./components/CourtCard";

function App() {
  return (
    <div id="App">
      <SignIn />
      <br/>
      <br/>
      <CourtCard />
    </div>
  );
}

export default App;
