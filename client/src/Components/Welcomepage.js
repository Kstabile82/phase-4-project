// import React, { useState } from "react"; 
// import HikesContainer from "./HikesContainer";
// import RenderUserHikes from "./RenderUserHikes";
// import { useHistory } from "react-router-dom";

// function Welcomepage({ user, alert }) {

//fetch hikes
//   let history = useHistory(); 
//   const [nextStep, setNextStep] = useState("");
//     function handleNext(e) {
//         e.preventDefault();
//         if (e.target.id === "createnew") {
//             setNextStep(e.target.id)
//         }
//           else if (e.target.id === "seehikes") {
//             setNextStep("seehikes")
//           }     
//           else {
//             setNextStep("logout")
//             history.push("/Home");
//           }   
//     }
// return (
//     <div>
//       {user.name !== undefined ? 
//          <div className="welcomeform">Welcome, {user.hikername.charAt(0).toUpperCase() + user.hikername.slice(1)}! 
//                 <form>What would you like to do?
//                     <button id="seehikes" name="nextsteps" style={{display: user.hikes.length !== 0 ? 'visible' : 'none' }} onClick={handleNext}>See My Hikes List</button>
//                     <button id="logout" name="logout" onClick={handleNext}>Log Out</button>
//                 </form>
//                  {(nextStep) === "createnew" ? <HikesContainer user={user} alert={alert} /> : null } 
//                 <br></br>
//                 <div >{(nextStep) === "seehikes" ? <MyHikes user={user} /> : null }</div>
//       </div>
//     : null}
//     </div>
// )



// }
// // export default Welcomepage; 