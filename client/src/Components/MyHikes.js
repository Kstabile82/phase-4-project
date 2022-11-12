import React, { useEffect, useState } from "react"; 
import HikeCard from "./HikeCard";
import ReactModal from 'react-modal';

function MyHikes({ isOpen, setIsOpen, errors, setErrors, user, userHikes, setUserHikes }) { 
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    fetch(`/hikerhikes/${user.id}`)
    .then((r) => r.json())
    .then((currentHikes) => {
        setUserHikes(currentHikes);
     });
    }, [])
    console.log(userHikes)
  function handleChangeStatus(e, h) {
       e.preventDefault();
       setNewStatus(e.target.value)
    }

    function handleDelete(h, e) {
     e.preventDefault();
        fetch(`/hikerhikes/${h.id}`, { 
        method: 'DELETE'
    })
    setUserHikes(userHikes.filter(uH => uH.id !== h.id))
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
    .then((updatedHikerHike) => {
      let del = userHikes.find(uH => uH.id === updatedHikerHike.id)
      let idx = userHikes.indexOf(del)
      userHikes.splice(idx, 1, updatedHikerHike)
      setUserHikes(userHikes)
    })   
 }

return (
    <div>
      <p>{user.hikername}'s Hikes</p>
        {userHikes.length > 0 ? userHikes.map(h => <div className="userhikes" key={h.id}><br></br>
        {h.hikemethod ? 
        <HikeCard setIsOpen={setIsOpen} setErrors={setErrors} userHikes={userHikes} setUserHikes={setUserHikes} hike={h.hikemethod} user={user}/>   : null }  
            <form onSubmit={(e)=> handleSubmitStatus(h, e)}>
            <select name="Status" id="status" onChange={handleChangeStatus}>
                <option value="" hidden>{h.status}</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
                <option value="Bucket list">Bucket List</option>
                </select>
                <button>Submit</button>
        </form> 
        <br></br>
        <button onClick={(e) => handleDelete(h, e)}>Delete from my hikes</button><br></br>
        </div>) : null }
        {errors ? <ReactModal
                    isOpen={isOpen}
                    contentLabel="Error Modal"
                    ariaHideApp={false}                    
                    onRequestClose={() => setIsOpen(false)}>
                 {errors.map(e => <p>{e}</p>)}    
                 <button onClick={() => setIsOpen(false)}>Close</button>
                </ReactModal> : null }
    </div>
)
}
export default MyHikes; 