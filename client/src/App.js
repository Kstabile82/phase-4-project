import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import HikesContainer from "./Components/HikesContainer";
import Signup from "./Components/Signup";
// import NavBar from "./Components/NavBar";

function App() {

  return (
    <div className="app">
      <HikesContainer/>
    {/* <NavBar/> 
        <Switch> 
        <Route path="/">
            <App /> 
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Hikes">
            <HikesContainer />
          </Route>
        </Switch> */}
    </div>
  );
}

export default App;
