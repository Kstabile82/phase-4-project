import React, { useState } from "react";
// import Welcomepage from "./Welcomepage";

function Signup({ user, setUser, onLogin, loggedOut, setLoggedOut }) {
// const [added, setAdded] = useState("");
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);


    function handleNewUser(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
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
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
return (
    // <div style={{display: loggedOut ? 'visible' : 'none' }}>Sign up
    <div>Sign up

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
    {/* {user} ? <Welcomepage user={user} loggedOut={loggedOut} setLoggedOut={setLoggedOut}/> */}
</div>
)
// let hikername = "";
//     function handleAdd(e) {
//         e.preventDefault();
//         // setAdded("");
//         hikername = e.target.value;
//     }

//     fetch ("http://localhost:3000/hikers", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//         hikername,
//         }),
//     })
//     .then((r) => r.json())
//     // setAdded("true");
//     setLoggedOut(false);
//     setUser({
//         "hikername": hikername, 
//         "hikershikes": [],
//     }); 

// function handleSubmit(e) {
//     e.preventDefault();
//      if (hikername === "") {
//         // setAdded("false")
//      } 
//     }
// return (
//     <div>
//         <form className="newuser" onSubmit={handleSubmit} style={{display: loggedOut ? 'visible' : 'none' }}>
//             Create New User:  
//             <input 
//             type="text"
//             name="username"
//             placeholder="Pick a unique username"
//             onChange={handleAdd}
//             ></input>                
//             <button>Enter</button> 
//             {/* {added === "true" ? <Dashboard theText={goodText} /> : null } 
//             {added === "false" ? <Dashboard theText={failText} /> : null }
//             {added === "taken" ? <Dashboard theText={takenUserName} /> : null } */}
//         </form> 
//         {user ? <Welcomepage user={user} /> : null}
//     </div>
// )
}
export default Signup;