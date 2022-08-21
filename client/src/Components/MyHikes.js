import React, { useState, useEffect } from "react"; 
import HikeCard from "./HikeCard";

function MyHikes({ user }) { 
  const [nextStep, setNextStep] = useState("");
//   const [myHikes, setMyHikes] = useState([]);
//   const [myHikes, setMyHikes] = useState(user.hikerhikes[0].hikemethod)
  //will need to map hikerhikes for the correct state above (or fetch hikerhikes by hiker id)
  //add button next to hike to update status (would update hikerhikes)
  //hikeContainer - add + button visible only if user (would add to hikerhikes)
  //add delete button on myHikes next to hikes (would delete from hikerhikes)
  //hikeCard for container & myHikes. Status goes below the card on myHikes
  //comment component
    //hikecard add/delete comment - update comment itself
    // useEffect(() => {
    //     fetch("/myhikes")
    //     .then((r) => r.json())
    //     .then((myHH) => {
    //         setMyHikes(myHH);
    //         // setMatches(currentHikes);
    //         // setSubmitted("true")
    //      });
    //     }, [])
        // if (myHikes.length > 0) {
        //     myHikes.map(h => console.log(h))
        // }

    function handleNext(e) {
        e.preventDefault();
        if (e.target.id === "createnew") {
            setNextStep(e.target.id)
        }
          else if (e.target.id === "seehikes") {
            setNextStep("seehikes")
          }     
          else {
            setNextStep("logout")
          }   
    }
return (
    <div>
        {/* <HikeCard hike={myHikes.hike} user={user} /> */}
        {/* {myHikes.map(myHike => <HikeCard hike={myHike} user={user}/> )} */}
                {/* <form>What would you like to do?
                    <button id="seehikes" name="nextsteps" style={{display: user.hikershikes.length !== 0 ? 'visible' : 'none' }} onClick={handleNext}>See My Workout List</button>
                    <button id="logout" name="logout" onClick={handleNext}>Log Out</button>
                </form>
                 {(nextStep) === "createnew" ? <ExerciseContainer user={user} alert={alert} /> : null } 
                <br></br> */}
    </div>
)



}
export default MyHikes; 