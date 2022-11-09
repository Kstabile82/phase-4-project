import React, { useState } from "react";
import ReactModal from 'react-modal';

function LogIn({ isOpen, setIsOpen, errors, setErrors, handleLogIn, loggedOut, handleLogout, setUserHikes }) {
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
          })
        }
        else {
          r.json().then((err) => {
            setErrors(err.errors) 
           setIsOpen(true)
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
                {errors ? <ReactModal
                    isOpen={isOpen}
                    contentLabel="Error Modal"
                    ariaHideApp={false}                    
                    onRequestClose={() => setIsOpen(false)}>
                 {errors.map(e => <p>{e}</p>)}    
                 <button onClick={() => setIsOpen(false)}>Close</button>
                </ReactModal> : null }
            </form> : null }
        </div>
    )
}
export default LogIn; 