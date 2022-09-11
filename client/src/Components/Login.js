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
       .then((r) => r.json())
       .then((hiker) => { 
        onLogin(hiker) 
        setUserHikes(hiker.hikerhikes)
        setLoggedOut(false)
       })
  }
//   function onDelete(id) {
//     const updatedHikes = userHikes.filter((hike) => hike.id !== id);
//     setUserHikes(updatedHikes)
//   }
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
           {user && !loggedOut ? <Welcomepage user={user} onLogout={onLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH} handleDeleteUser={handleDeleteUser} /> : null }
        </div>
    )
}
export default LogIn; 
// import React, { useEffect, useState } from "react";
// import Welcomepage from "./Welcomepage";

// function Login() {
// const [inputname, setInputName] = useState("");
// const [loggedOut, setLoggedOut] = useState(true);
// const [added, setAdded] = useState("");
// const [user, setUser] = useState({});
// let hikername = "";

// const [userData, setUserData] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:3000/hikers")
//         .then((r) => r.json())
//         .then((currentusers) => {
//             setUserData(currentusers);
//           })
//      },[]);
//     function handleName(e) {
//        e.preventDefault();
//        setAdded("")
//        setInputName(e.target.parentElement.firstChild.nextSibling.value);
//         if (inputname === "") {
//             setAdded("false");
//         }
//         else {
//          let findMatch = userData.find(listItem => listItem.name.toLowerCase() === inputname.toLowerCase()); 
//                  if (findMatch !== undefined) {
//                     setUser(findMatch)
//                     setLoggedOut(false);
//                  }
//                  else if (findMatch === undefined) {
//                      setAdded("mismatch")
//                  }       
//         }
//     }
       
//     return (
//         <div>HELLO!
//             <form className="login" onSubmit={handleName} style={{display: loggedOut ? 'visible' : 'none' }}> 
//                 User Login:  
//                 <input 
//                 type="text" 
//                 id="inputname" 
//                 placeholder="Enter your username"
//                 onChange={(e) => setInputName(e.target.value)}></input>  
//                 <button>Enter</button>
//                 {/* {added === "false" ? <Dashboard theText={failText} /> : null }
//                 {added === "mismatch" ? <Dashboard theText={noMatchText} /> : null } */}
//             </form>
//             {user ? <Welcomepage user={user} /> : null}
//         </div>
//     )
// }
// export default Login;