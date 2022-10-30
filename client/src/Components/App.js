import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import HikesContainer from "./HikesContainer";
import Signup from "./Signup";
import MyHikes from "./MyHikes";
import Welcomepage from "./Welcomepage";
import Allusers from "./Allusers";

function App() {
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(true);
  const [userHikes, setUserHikes] = useState([])
  const [admin, setAdmin] = useState(false)
  const [users, setUsers] = useState([])
  const [hikes, setHikes] = useState([])
  const [displayedHikes, setDisplayedHikes] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setLoggedOut(false)
          setUserHikes(user.hikerhikes)
          setAdmin(user.admin)
          if (user.admin) {
            fetch("/showallusers")
            .then((r) => r.json())
            .then((usrs) => setUsers(usrs));
        }
        })
      }
    })
  }, []);
  useEffect(() => {
    fetch("/hikes")
    .then((r) => r.json())
    .then((currentHikes) => {
        setHikes(currentHikes);
        setDisplayedHikes(currentHikes);
     });
    }, [])

  function onSetHikes(hike) {
    setHikes(hikes.filter(h => h.id !== hike.id))
    setDisplayedHikes(displayedHikes.filter(h => h.id !== hike.id))
  }
  function handleLogIn(hiker) {
    setUser(hiker);
    setLoggedOut(false)
    setAdmin(hiker.admin)
    setUserHikes(hiker.hikerhikes)
    }
  function handleLogout() {
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
    <NavBar admin={admin} user={user} onLogout={handleLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
    <Switch>
      <Route exact path="/hikes">
        <HikesContainer onSetHikes={onSetHikes} displayedHikes={displayedHikes} setDisplayedHikes={setDisplayedHikes} hikes={hikes} setHikes={setHikes} user={user} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/login">
        <Login setUserHikes={setUserHikes} handleLogIn={handleLogIn} handleLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/signup">
        <Signup handleLogIn={handleLogIn} handleLogout={handleLogout} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
        {user && !loggedOut && admin === true ? 
        <Route exact path="/allusers">
        <Allusers user={user} admin={admin} users={users} setUsers={setUsers}/> 
        </Route> : null}
      {user && !loggedOut ? <div>
        <Route exact path="/myhikes">
        <MyHikes user={user} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
        </Route> 
        <Route exact path="/welcomepage">
        <Welcomepage user={user} handleLogout={handleLogout} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
        </Route> </div>
        : null}
    </Switch>
  </div>
  );
}

export default App;
