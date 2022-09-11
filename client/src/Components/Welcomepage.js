import React, { useState } from "react"; 
import MyHikes from "./MyHikes";
// import { useHistory } from "react-router-dom";

function Welcomepage({ user, userHikes, setUserHikes, loggedOut, setLoggedOut, onLogout, handleDeleteHH }) {
//   let history = useHistory(); 
const [myHikes, setMyHikes] = useState([]);
// setUserHikes(user.hikerhikes)
// useEffect(() => {
//     fetch(`/myhikes`)
//     .then((r) => r.json())
//     .then((myHH) => {
//         setMyHikes(myHH);
//         // setMatches(currentHikes);
//         // setSubmitted("true")
//      });
//     }, [])

    function handleLogout(e){
        e.preventDefault(); 
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              onLogout();
              setLoggedOut(true)
            }
        })
    }


    function handleDelete(e){
      e.preventDefault();
      fetch("/deleteme", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          handleDelete(user);
        }
    })
    }
return (
    <div>
        Welcome, {user.hikername}!
        {/* <button onClick={handleLogOut}>Log Out</button> */}
        <button onClick={handleDelete}>Delete My Account</button>
        <button onClick={handleLogout}>Log Out</button> 
        {user.hikerhikes.length > 0 ? <MyHikes user={user} myHikes={myHikes} setMyHikes={setMyHikes} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH} /> : null}
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