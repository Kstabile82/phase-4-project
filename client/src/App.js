import './App.css';
import React from "react";
// import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import HikesContainer from "./Components/HikesContainer";
import Signup from "./Components/Signup";
// import NavBar from "./Components/NavBar";

function App() {

  return (
    <div className="app">
      <HikesContainer />
    {/* <NavBar/> 
        <Routes> 
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
        </Routes> */}
    </div>
  );
}

export default App;
