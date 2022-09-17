import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import HikesContainer from "./HikesContainer";
import Signup from "./Signup";
import MyHikes from "./MyHikes";
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

  function handleDeleteUser() {
    setUser(null);
    setLoggedOut(true)
    setUserHikes([])
  }
  function handleDeleteHH() {
    setUserHikes(user.hikerhikes)
  }
  return (
    <div className="App">
      <h1 className="Hello">Hiker's Hub</h1>
    <NavBar user={user} onLogout={handleLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
    <Switch>
      <Route exact path="/hikes">
        <HikesContainer user={user} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/login">
        <Login handleDeleteUser={handleDeleteUser} onLogin={handleLogin} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/signup">
        <Signup handleDeleteUser={handleDeleteUser} onLogin={handleLogin} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      {user ? <Route exact path="/myhikes">
        <MyHikes user={user} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route> : null}
      {user ? <Route exact path="/welcomepage">
        <Welcomepage user={user} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route> : null}
    </Switch>
  </div>
  );
}

export default App;
