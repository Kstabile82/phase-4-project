import React, { useState } from "react";

function LogIn({ handleLogIn, loggedOut, handleLogout, setUserHikes }) {
const [inputName, setInputName] = useState("")
const [inputPassword, setInputPassword] = useState("")
// const [userHikes, setUserHikes] = useState([])
  function handleUser(e) {
       e.preventDefault();
       fetch("/login", {
           method: "POST", 
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({ hikername: inputName, password: inputPassword }),
       })
    .then((r) => {
        if (r.ok) {
          r.json().then((hiker) => {
            handleLogIn(hiker)
            // setUserHikes(hiker.hikes)
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
        </div>
    )
}
export default LogIn; 