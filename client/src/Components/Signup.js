import React, { useState } from "react";
import Welcomepage from "./Welcomepage";
import ReactModal from 'react-modal';

function Signup({ isOpen, setIsOpen, errors, setErrors, user, handleLogIn, loggedOut, setLoggedOut, handleLogout }) {
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
    function handleNewUser(e) {
      if (password === confirmPassword) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hikername: userName,
            admin: false, 
            password,
            password_confirmation: confirmPassword
                  }),
        }).then((r) => {
          if (r.ok) {
            r.json()
            .then((user) => handleLogIn(user));
          } 
          else {
            r.json()
                .then((errorInfo) => {
                  setErrors(errorInfo.errors)
                  setIsOpen(true)
                })
             }
        });
      }
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
    {errors ? <ReactModal
                    isOpen={isOpen}
                    contentLabel="Error Modal"
                    ariaHideApp={false}                    
                    onRequestClose={() => setIsOpen(false)}>
                 {errors.map(e => <p>{e}</p>)}    
                 <button onClick={() => setIsOpen(false)}>Close</button>
                </ReactModal> : null }
    {user ? <Welcomepage user={user} loggedOut={loggedOut} setLoggedOut={setLoggedOut} handleLogout={handleLogout} /> : null }
</div>
)
}
export default Signup;