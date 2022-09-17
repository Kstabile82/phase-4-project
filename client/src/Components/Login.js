import React, { useState } from "react";
import Welcomepage from "./Welcomepage";

function LogIn({ handleDeleteUser, onLogin, onLogout, user, userHikes, setUserHikes, loggedOut, setLoggedOut, handleDeleteHH }) {
const [inputName, setInputName] = useState("")
const [inputPassword, setInputPassword] = useState("")

  function handleUser(e) {
       e.preventDefault();
       fetch("/login", {
           method: "POST", 
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({ hikername: inputName, password: inputPassword }),
       })
    //    .then((r) => r.json())
    //    .then((hiker) => { 
    //     onLogin(hiker) 
    //     setUserHikes(hiker.hikerhikes)
    //     setLoggedOut(false)
    //    })
    .then((r) => {
        if (r.ok) {
          r.json().then((hiker) => {
            onLogin(hiker)
            setUserHikes(hiker.hikerhikes)
            setLoggedOut(false)
          })
        }
      });
  }

    return (
        <div>
            {loggedOut ? 
            <form className="login" onSubmit={handleUser}>  
             <input 
                type="text" 
                id="inputname" 
                placeholder="Username"
                onChange={(e) => setInputName(e.target.value)}></input>  
                 <input 
                type="text" 
                id="password" 
                placeholder="Password"
                onChange={(e) => setInputPassword(e.target.value)}></input>  
                <button>Enter</button>
            </form> : null }
           {/* {user && !loggedOut ? <Welcomepage user={user} onLogout={onLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH} handleDeleteUser={handleDeleteUser} /> : null } */}
        </div>
    )
}
export default LogIn; 