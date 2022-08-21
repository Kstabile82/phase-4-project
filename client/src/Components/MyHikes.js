import React, { useState } from "react"; 

function MyHikes({ user }) { 
  const [nextStep, setNextStep] = useState("");
  const [myHikes, setMyHikes] = useState(user.hikerhikes[0].hikemethod)
  //will need to map hikerhikes for the correct state above (or fetch hikerhikes)
  //add button next to hike to update status (would update hikerhikes)
  //hikeContainer - add + button visible only if user (would add to hikerhikes)
  //add delete button on myHikes next to hikes (would delete from hikerhikes)
  //hikeCard for container & myHikes. Status goes below the card on myHikes
  //comment component
    //hikecard add/delete comment - update comment itself
    function handleNext(e) {
        e.preventDefault();
        if (e.target.id === "createnew") {
            setNextStep(e.target.id)
        }
          else if (e.target.id === "seeworkouts") {
            setNextStep("seeworkouts")
          }     
          else {
            setNextStep("logout")
          }   
    }
return (
    <div>
        {myHikes.name}
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