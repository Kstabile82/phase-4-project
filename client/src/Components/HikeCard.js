import React, { useState } from "react"; 
function HikeCard({ hike, hikerhike, user, setStatusUpdate, status, statusUpdate, handleChangeStatus, handleSubmitStatus, newStatus }) {
    const [h, setH] = useState(hike)
    const [hh, setHH] = useState({})

    //fetch all hikerhikes, filter by those with user and hike ID matches, save to a variable, patch/
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
        // .then((updatedHike) => handleUpdateHike(updatedHike))
        .then((updatedHike) => setH(updatedHike))

        // .then((updatedHike) => handleUpdateHike(updatedHike))
    }
    function statusClicked(e) {
        e.preventDefault();
        setStatusUpdate(true)
    }
    function handleSubmitStatus(e) {
        e.preventDefault();
        // setHH(user.hikerhikes.find(hke => hke.hike_id === hike.id))
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
            {/* {user !== null ? <button onClick={statusClicked}>{status}</button> : null}
            {statusUpdate ? <form onSubmit={handleSubmitStatus}>
            <select name="Status" id="status" onChange={handleChangeStatus}>
                <option value="" hidden>Status</option>
                <option value="planned">Planned</option>
                <option value="completed">Completed</option>
                <option value="bucketlist">Bucket List</option>
                </select>
                <button>Submit</button>
        </form> : null}
            </ul> */}
            {user !== null && user !== undefined ? <form onSubmit={handleSubmitStatus}>
            <select name="Status" id="status" onChange={handleChangeStatus}>
                <option value="" hidden>Status: {status}</option>
                <option value="planned">Planned</option>
                <option value="completed">Completed</option>
                <option value="bucketlist">Bucket List</option>
                </select>
                <button>Submit</button>
        </form> : null}
            </ul>
        </div>
    )
}
export default HikeCard; 