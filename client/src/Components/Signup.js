import React, { useState } from "react";
import Welcomepage from "./Welcomepage";

function Signup({ user, handleLogIn, loggedOut, setLoggedOut, handleLogout }) {
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const [errors, setErrors] = useState([]);

    function handleNewUser(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hikername: userName,
            password,
            password_confirmation: confirmPassword
                  }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => handleLogIn(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
return (
    <div>
    <form className="signup" onSubmit={handleNewUser}>  
     <input 
        type="text" 
        id="username" 
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}></input>  
         <input 
        type="text" 
        id="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}></input> 
         <input 
        type="text" 
        id="confirmpassword" 
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}></input>   
        <button>Enter</button>
    </form>
    {user ? <Welcomepage user={user} loggedOut={loggedOut} setLoggedOut={setLoggedOut} handleLogout={handleLogout} /> : null }
</div>
)
}
export default Signup;