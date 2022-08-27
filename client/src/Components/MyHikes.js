import React, { useState, useEffect } from "react"; 
import HikeCard from "./HikeCard";

function MyHikes({ user }) { 
  const [nextStep, setNextStep] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [hhs, setHhs] = useState([])

//   useEffect(() => {
//         fetch(`/myhikes`)
//         .then((r) => r.json())
//         .then((userhikes) => {
//             setHhs(userhikes);
//             // setMatches(currentHikes);
//             // setSubmitted("true")
//          });
//         }, [])
//         console.log(hhs)
    
//   user.hikerhikes.map(h => console.log(h.hikemethod.name))
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

    // function handleSubmitStatus(e, hike) {
    //     e.preventDefault();
    //     fetch(`/hikerhikes/${hike.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ status: newStatus }),
    //     })
    //     .then((r) => r.json())
    //     // .then((updatedHike) => setH(updatedHike))   
    //  }

    function handleChangeStatus(e) {
        e.preventDefault();
       setNewStatus(e.target.value)
    }
return (
    <div>
        {user.hikerhikes.map(h => <HikeCard hikerhike={h} hike={h.hikemethod} handleChangeStatus={handleChangeStatus} status={h.status} newStatus={newStatus} user={user}/>)}
       
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