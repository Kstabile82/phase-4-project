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
import ReactModal from 'react-modal';

function App() {
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(true);
  const [userHikes, setUserHikes] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState([])
  const [hikes, setHikes] = useState([])
  const [displayedHikes, setDisplayedHikes] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [errors, setErrors] = useState(null)
  const [admins, setAdmins] = useState([])
  const [nonAdmins, setNonAdmins] = useState([])
  const [hikeComments, setHikeComments] = useState([])
  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => {
          setUser(user)
          setLoggedOut(false)
          // setUserHikes(user.hikerhikes)
          setIsAdmin(user.admin)
          if (user.admin) {
            fetch("/hikers", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
              })
            .then((r) => r.json())
            .then((usrs) => {
              setAdmins(usrs.filter(us => us.admin === true))
              setNonAdmins(usrs.filter(ur => ur.admin === false))
              setUsers(usrs)
            }  )
            
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

    if (user) {
     fetch(`/hikerhikes/${user.id}`)
     .then((r) => r.json())
     .then((hh) => setUserHikes(hh))
    }
console.log(userHikes)
  function handleHH(h, e) {
    fetch(`/hikes/${h.id}`, { 
      method: 'DELETE'
    })
    setHikes(hikes.filter(hk => hk.id !== h.id))
    setDisplayedHikes(displayedHikes.filter(dh => dh.id !== h.id))
    if (user && user.userHikes !== []){
      setUserHikes(user.hikerhikes)
    }
  }
  function handleLogIn(hiker) {
    setUser(hiker);
    setLoggedOut(false)
    setIsAdmin(hiker.admin)
    setIsOpen(true)
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
      {user ? <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        ariaHideApp={false}                    
        onRequestClose={() => setIsOpen(false)}>
        Welcome, {user.hikername}!
        <button onClick={() => setIsOpen(false)}>Close</button>
      </ReactModal> : null } 
    <NavBar admin={isAdmin} user={user} onLogout={handleLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
    <Switch>
      <Route exact path="/hikes">
        <HikesContainer hikeComments={hikeComments} setHikeComments={setHikeComments} handleHH={handleHH} errors={errors} setErrors={setErrors} isOpen={isOpen} setIsOpen={setIsOpen} setHikes={setHikes} hikes={hikes} setDisplayedHikes={setDisplayedHikes} displayedHikes={displayedHikes} user={user} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/login">
        <Login isOpen={isOpen} setIsOpen={setIsOpen} errors={errors} setErrors={setErrors} setUserHikes={setUserHikes} handleLogIn={handleLogIn} handleLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      <Route exact path="/signup">
        <Signup isOpen={isOpen} setIsOpen={setIsOpen} errors={errors} setErrors={setErrors} handleLogIn={handleLogIn} handleLogout={handleLogout} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
      </Route>
      {!loggedOut && isAdmin === true ? 
        <Route exact path="/allusers">
        <Allusers admins={admins} setAdmins={setAdmins} nonAdmins={nonAdmins} setNonAdmins={setNonAdmins} user={user} admin={isAdmin} users={users} setUsers={setUsers}/> 
        </Route> : null}
      {user && !loggedOut ? 
        <Route exact path="/myhikes">
        <MyHikes hikeComments={hikeComments} setHikeComments={setHikeComments} hikes={hikes} setHikes={setHikes} setErrors={setErrors} errors={errors} isOpen={isOpen} setIsOpen={setIsOpen} user={user} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
        </Route> : null}
        {user && !loggedOut ? 
        <Route exact path="/welcomepage">
        <Welcomepage user={user} handleLogout={handleLogout} setUserHikes={setUserHikes} userHikes={userHikes} handleDeleteHH={handleDeleteHH}/>
        </Route> : null } 
    </Switch>
  </div>
  );
}

export default App;