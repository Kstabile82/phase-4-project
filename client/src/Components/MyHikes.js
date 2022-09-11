import React, { useState } from "react"; 
import HikeCard from "./HikeCard";

function MyHikes({ onDelete, user, userHikes, setUserHikes, handleDeleteHH }) { 
  const [newStatus, setNewStatus] = useState("");

    function handleChangeStatus(e) {
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
    // onDelete(toDelete.id);
    setUserHikes(userHikes.filter(uH => uH.id !== toDelete.id))
    // setUserHikes(user.hikerhikes)
  }
    // fetch(`/myhikes/${toDelete.id}`, { 
    //         method: "DELETE"
    //   })
    //   .then((r) => r.json())
    //   .then((deleted) => console.log(deleted))

        // .then((deleted) => {
        //     let idx = userHikes.indexOf(deleted); 
        //     setUserHikes(userHikes.splice(idx, 1))
        // })
        // setUserHikes(userHikes)
return (
    <div>
        {userHikes.map(h => <div className={h.hike_id} key={h.id}><HikeCard userHikes={userHikes} setUserHikes={setUserHikes} hikerhike={h} hike={h.hikemethod} handleChangeStatus={handleChangeStatus} status={h.status} newStatus={newStatus} user={user}/> <button onClick={handleDelete}>Delete from my hikes</button></div>)}

    </div>
)
}
export default MyHikes; 