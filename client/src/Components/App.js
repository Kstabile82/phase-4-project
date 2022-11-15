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
  const [hikeComments, setHikeComments] = useState(null)
  const [myHikes, setMyHikes] = useState([])
  let toupdate; 
  let idx;

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => {
          setUser(user)
          setLoggedOut(false)
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
     })
    }, [])
    
    if (user) {
    //  fetch(`/hikerhikes/${user.id}`)
    fetch(`/getmyhikes`)

     .then((r) => r.json())
     .then((hh) => setUserHikes(hh))
    }

function handleLikeAdd(hike) {
  fetch(`/hikes/${hike.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: hike.likes + 1 }),
})
.then((r) => r.json())
.then((updatedHike) => {
    toupdate = hikes.find(h => h.id === hike.id)
    idx = hikes.indexOf(toupdate)
    setHikes(hikes.splice(idx, 1, updatedHike))
})
}
function updateWithComment(hkrhk, newComment){
  fetch ("/comments", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
        text: newComment,
        hikerhike_id: hkrhk.id        
    })
    })
     .then((r) => {
    if (r.ok) {
       r.json().then((comm) => {
        if (hikeComments === null) {
            setHikeComments([comm])
        }
        else {
            setHikeComments([...hikeComments, comm])
        }
       }) 
         }
     else {
     r.json()
        .then((errorInfo) => {
            setErrors(errorInfo.errors)
            setIsOpen(true)
        })
     }
    })
}
  function handleHH(h, e) {
    fetch(`/hikes/${h.id}`, { 
      method: 'DELETE'
    })
    setHikes(hikes.filter(hk => hk.id !== h.id))
    setDisplayedHikes(displayedHikes.filter(dh => dh.id !== h.id))

    if (user && userHikes !== []){
      setUserHikes(userHikes)
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
  // function handleDeleteHH() {
  //   setUserHikes(userHikes)
  // }
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
        <HikesContainer updateWithComment={updateWithComment} handleLikeAdd={handleLikeAdd} hikeComments={hikeComments} setHikeComments={setHikeComments} handleHH={handleHH} errors={errors} setErrors={setErrors} isOpen={isOpen} setIsOpen={setIsOpen} setHikes={setHikes} hikes={hikes} setDisplayedHikes={setDisplayedHikes} displayedHikes={displayedHikes} user={user} userHikes={userHikes} setUserHikes={setUserHikes} />
      </Route>
      <Route exact path="/login">
        <Login isOpen={isOpen} setIsOpen={setIsOpen} errors={errors} setErrors={setErrors} setUserHikes={setUserHikes} handleLogIn={handleLogIn} handleLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} userHikes={userHikes} />
      </Route>
      <Route exact path="/signup">
        <Signup isOpen={isOpen} setIsOpen={setIsOpen} errors={errors} setErrors={setErrors} handleLogIn={handleLogIn} handleLogout={handleLogout} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} setUserHikes={setUserHikes} userHikes={userHikes} />
      </Route>
      {!loggedOut && isAdmin === true ? 
        <Route exact path="/allusers">
        <Allusers admins={admins} setAdmins={setAdmins} nonAdmins={nonAdmins} setNonAdmins={setNonAdmins} user={user} admin={isAdmin} users={users} setUsers={setUsers}/> 
        </Route> : null}
      {user && !loggedOut ? 
        <Route exact path="/myhikes">
        <MyHikes updateWithComment={updateWithComment} hikes={hikes} handleLikeAdd={handleLikeAdd} myHikes={myHikes} setMyHikes={setMyHikes} hikeComments={hikeComments} setHikeComments={setHikeComments} setHikes={setHikes} setErrors={setErrors} errors={errors} isOpen={isOpen} setIsOpen={setIsOpen} user={user} setUserHikes={setUserHikes} userHikes={userHikes}/>
        </Route> : null}
        {user && !loggedOut ? 
        <Route exact path="/welcomepage">
        <Welcomepage user={user} handleLogout={handleLogout} setUserHikes={setUserHikes} userHikes={userHikes} />
        </Route> : null } 
    </Switch>
  </div>
  );
}

export default App;