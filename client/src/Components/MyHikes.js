import React, { useState } from "react"; 
import HikeCard from "./HikeCard";

function MyHikes({ user, userHikes, setUserHikes }) { 
  const [newStatus, setNewStatus] = useState("");
  // const [hh, setHH] = useState(hikerhike)
  const [hh, setHH] = useState({})


    function handleChangeStatus(e, h) {
       e.preventDefault();
       setNewStatus(e.target.value)
    }

    function handleDelete(e) {
     e.preventDefault();
     let clickedId = parseInt(e.target.parentElement.className);
     let toDelete = userHikes.find(uH => uH.hike_id === clickedId)
      //   fetch(`/myhikes/${toDelete.id}`, { 
      //       method: "DELETE" 
      //   })
      //   .then((r) => {
      //     if (r.ok) {
      //       // handleDeleteHH(toDelete);
      //       console.log(r)
      //     }
      // })
      fetch(`/hikerhikes/${toDelete.id}`, { 
        method: 'DELETE'
    })
    setUserHikes(userHikes.filter(uH => uH.id !== toDelete.id))
  }
  function handleSubmitStatus(h, e) {
    e.preventDefault();
    fetch(`/hikerhikes/${h.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
    })
    .then((r) => r.json())
    // .then((updatedHikerHike) => setHH(updatedHikerHike))   
    .then((updatedHikerHike) => {
      let newUH = userHikes.filter(uH => uH.id !== updatedHikerHike.id) 
      setUserHikes([...newUH, updatedHikerHike])
    })   
 }
return (
    <div>
      <p>{user.hikername}'s Hikes</p>
        {userHikes.map(h => <div className="userhikes" key={h.id}><br></br>
        <HikeCard userHikes={userHikes} setUserHikes={setUserHikes} hikerhike={h} hike={h.hikemethod} user={user}/> <button onClick={handleDelete}>Delete from my hikes</button><br></br>
        <form onSubmit={(e)=> handleSubmitStatus(h, e)}>
            <select name="Status" id="status" onChange={handleChangeStatus}>
                <option value="" hidden>{h.status}</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
                <option value="Bucket list">Bucket List</option>
                </select>
                <button>Submit</button>
        </form> 
          </div>)}
    </div>
)
}
export default MyHikes; 