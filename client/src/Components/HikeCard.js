import React, { useState } from "react"; 
function HikeCard(hike, user, handleUpdateHike) {
    const [h, setH] = useState(hike)
    function handleComments(e) {
        e.preventDefault();
    }
    function handleLikes(e) {
        e.preventDefault();
        const newLikes = hike.hike.likes++
        fetch(`/hikes/${hike.hike.id}`, {
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
    return(
        <div>
            <ul className={hike.hike.location} key={hike.hike.location}>{hike.hike.name} - {hike.hike.location} - {hike.hike.distance} miles - {hike.hike.difficulty}<li key={hike.hike.name} className={hike.hike.name} onClick={handleComments}>Comments</li><button onClick={handleLikes}>{hike.hike.likes} Likes</button></ul>
          
        </div>
    )
}
export default HikeCard; 