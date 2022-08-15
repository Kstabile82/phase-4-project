import React, { useState } from "react";
// import Welcomepage from "./Welcomepage";

function Signup() {
const [loggedOut, setLoggedOut] = useState(true);
// const [added, setAdded] = useState("");
const [user, setUser] = useState({});
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

    function handleNewUser(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            //post request
            setUser({name: userName, password: password})
            setLoggedOut(false)
        }
        else {
            console.log("Passwords don't match")
        }
    }
return (
    <div style={{display: loggedOut ? 'visible' : 'none' }}>Sign up
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