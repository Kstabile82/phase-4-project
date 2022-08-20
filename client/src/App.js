import './App.css';
import React from "react";
// import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import HikesContainer from "./Components/HikesContainer";
import Signup from "./Components/Signup";
// import NavBar from "./Components/NavBar";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/me")
  //   .then(r => {
  //     if (r.ok) {
  //       r.json().then(
  //         console.log("logged in: ", hiker)
  //       )
  //     }
  //     else {
  //       console.log("no one logged in")
  //     }
  //   })
  // }, [])
  return (
    <div className="app">
      <Login />
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
