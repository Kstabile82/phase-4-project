import './App.css';
import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import HikesContainer from "./HikesContainer";
import Signup from "./Signup";
import Welcomepage from "./Welcomepage";


function App() {
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(true);
  const [userHikes, setUserHikes] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setLoggedOut(false)
          setUserHikes(user.hikerhikes)
        })
      }
    })
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
    setUserHikes(hiker.hikerhikes)
  }

  function handleLogout() {
    setUser(null);
    setLoggedOut(true)
    setUserHikes([])
  }
    // setUser(null);
    // setLoggedOut(true)
    // setUserHikes([])
  
  function handleDelete() {
    setUser(null);
    setLoggedOut(true)
    setUserHikes([])
  }
  function handleDeleteHH(hh) {
    console.log(hh)
    setUserHikes(user.hikerhikes)
  }
  return (
    <div className="App">
    <NavBar user={user} onLogout={handleLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
    <Switch>
      <Route exact path="/hikes">
        <HikesContainer user={user} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/login">
        <Login onLogin={handleLogin} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} handleDelete={handleDelete} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/welcomepage">
        <Welcomepage user={user} onLogout={handleLogout} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} handleDelete={handleDelete} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/signup">
        <Signup onLogin={handleLogin} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} handleDelete={handleDelete} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
    </Switch>
    {/* { !loggedOut && user ? <button onClick={handleLogout}>Log Out</button> : null } */}
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
