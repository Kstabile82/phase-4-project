import React, { useState, useEffect } from "react"; 
function HikeCard({ hike, hikerhike, user, status, handleChangeStatus, newStatus }) {
    const [h, setH] = useState(hike)
    const [comments, setComments] = useState([])
    const [commentForm, setCommentForm] = useState(false)
    const [newComment, setNewComment] = useState("")
   
    useEffect(() => {
        fetch(`/comments`)
        .then((r) => r.json())
        .then((currentComments) => setComments(currentComments.map(c => c.text)))
        }, [])
    function handleComments(h) {

    }
    function handleCommentForm() {
        setCommentForm(true)
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
   function handleAddComment(e){
    e.preventDefault();
    //post request newComment, h.id, user.id
    fetch ("/comments", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: newComment,
            hiker_id: user.id, 
            hike_id: h.id
        })
        })
    .then((r) => r.json())
    .then(newComm => setComments([...comments, newComm]))
   }
   function handleCommentChange(e){
    e.preventDefault();
    setNewComment(e.target.value)
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
            <ul className={h.location} key={h.location}>{h.name} - {h.location} - {h.distance} miles - {h.difficulty}
            <br></br><button onClick={handleLikes}>{h.likes} Likes</button>
            {user !== null && user !== undefined ? <form onSubmit={handleSubmitStatus}>
            <select name="Status" id="status" onChange={handleChangeStatus}>
                <option value="" hidden>Status: {status}</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
                <option value="Bucket list">Bucket List</option>
                </select>
                <button>Submit</button>
        </form> : null}
        <li key={h.name} className={h.name} onClick={() => handleComments(h)}>Comments</li>
          {comments !== undefined && comments !== [] ? 
             comments.map(c => <p>{c}</p> )
           : <p>None</p> } 
           <button onClick={() => handleCommentForm()}>Add Comment</button>
            {commentForm ? <form onSubmit={handleAddComment}>
                <input onChange={handleCommentChange}
                type="text"
                name="comment"
                placeholder="Enter text here"
                ></input>
                <button>Submit</button>
            </form> : null}
            </ul>
        </div>
    )
}
export default HikeCard; 