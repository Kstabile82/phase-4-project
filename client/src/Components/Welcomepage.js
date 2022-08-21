import React, { useState } from "react"; 
import MyHikes from "./MyHikes";
// import { useHistory } from "react-router-dom";

function Welcomepage({ user, loggedOut, setLoggedOut, onLogout }) {
//   let history = useHistory(); 
  const [nextStep, setNextStep] = useState("");
    function handleNext(e) {
        e.preventDefault();
          if (e.target.id === "seehikes") {
            setNextStep("seehikes")
          }     
          else {
            setNextStep("logout")
            // history.push("/Home");
          }   
    }
    function handleLogOut(e){
        e.preventDefault(); 
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              onLogout(user);
            }
        })
        // onLogout(user);
    }
return (
    <div>
        Welcome, {user.hikername}!
        <button onClick={handleLogOut}>Log Out</button>
        <MyHikes user={user} /> 
      {/* {user.name !== undefined ? 
         <div className="welcomeform">Welcome, {user.hikername.charAt(0).toUpperCase() + user.hikername.slice(1)}! 
                <form>What would you like to do?
                    <button id="seehikes" name="nextsteps" style={{display: user.hikes.length !== 0 ? 'visible' : 'none' }} onClick={handleNext}>See My Hikes List</button>
                    <button id="logout" name="logout" onClick={handleNext}>Log Out</button>
                </form>
                <br></br>
                <div >{(nextStep) === "seehikes" ? <HikesContainer user={user} /> : null }</div>
      </div>
    : null} */}
    </div>
)



}
 export default Welcomepage; 