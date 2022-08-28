import React, { useState } from "react"; 
function HikeCard({ hike, hikerhike, user, status, handleChangeStatus, newStatus }) {
    const [h, setH] = useState(hike)

    function handleComments(e) {
        e.preventDefault();
    }
    function handleLikes(e) {
        e.preventDefault();
        const newLikes = hike.likes++
        fetch(`/hikes/${hike.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: newLikes }),
        })
        .then((r) => r.json())
        .then((updatedHike) => setH(updatedHike))
    }
 
    function handleSubmitStatus(e) {
        e.preventDefault();
        fetch(`/hikerhikes/${hikerhike.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
        })
        .then((r) => r.json())
        .then((updatedHikerHike) => setH(updatedHikerHike))   
     }
    return(
        <div>
            <ul className={h.location} key={h.location}>{h.name} - {h.location} - {h.distance} miles - {h.difficulty}<li key={h.name} className={h.name} onClick={handleComments}>Comments</li><button onClick={handleLikes}>{h.likes} Likes</button>
            {user !== null && user !== undefined ? <form onSubmit={handleSubmitStatus}>
            <select name="Status" id="status" onChange={handleChangeStatus}>
                <option value="" hidden>Status: {status}</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
                <option value="Bucket list">Bucket List</option>
                </select>
                <button>Submit</button>
        </form> : null}
            </ul>
        </div>
    )
}
export default HikeCard; 