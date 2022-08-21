import './App.css';
import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import HikesContainer from "./HikesContainer";
import Signup from "./Signup";


function App() {
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(true);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
        setLoggedOut(false)
      }
    });
  }, []);

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
    setUser(hiker);
    setLoggedOut(false)
  }
  function handleLogout() {
    setUser(null);
    setLoggedOut(true)
  }
  return (
    <div className="App">
    <NavBar user={user} onLogout={handleLogout} />
    <Switch>
      <Route exact path="/hikes">
        <HikesContainer user={user} />
      </Route>
      <Route exact path="/login">
        <Login onLogin={handleLogin} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
      </Route>
      <Route exact path="/signup">
        <Signup onLogin={handleLogin} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
      </Route>
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
