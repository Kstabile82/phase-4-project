import './App.css';
import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import HikesContainer from "./HikesContainer";
import Signup from "./Signup";


function App() {
  const [hiker, setHiker] = useState(null);

  // useEffect(() => {
  //   fetch("/me")
  //   .then(r => {
  //    console.log(r)
//      if (r.ok) {
//       r.json().then(
//  r.json().then((hiker) => setHiker(hiker))
//     }
  //   });
  // }, []);
  function handleLogin(hiker) {
    setHiker(hiker);
  }

  function handleLogout() {
    setHiker(null);
  }

  return (
    <div className="App">
    <NavBar hiker={hiker} onLogout={handleLogout} />
    <Switch>
      <Route exact path="/hikes">
        <HikesContainer />
      </Route>
      <Route exact path="/login">
        <Login onLogin={handleLogin} />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      {/* <Route exact path="/">
        <App />
      </Route> */}
    </Switch>
  </div>

    //  <div className="app">
    //    <Login />
    //  <NavBar/> 
    //     <Routes> 
    //     <Route path="/">
    //         <App /> 
    //       </Route>
    //       <Route path="/Login">
    //         <Login />
    //       </Route>
    //       <Route path="/Signup">
    //         <Signup />
    //       </Route>
    //       <Route path="/Hikes">
    //         <HikesContainer />
    //       </Route>
    //     </Routes> 
    //  </div>
  );
}

export default App;
