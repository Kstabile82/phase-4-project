import React, { useState, useEffect } from "react"; 
import { FaThumbsUp } from "react-icons/fa"

function HikeCard({ hh, setHH, hike, hikerhike, user, userHikes, setUserHikes, status, handleChangeStatus, newStatus }) {
    const [h, setH] = useState(hike)
    // const [hh, setHH] = useState(hikerhike)
    const [comments, setComments] = useState([])
    const [commentForm, setCommentForm] = useState(false)
    const [newComment, setNewComment] = useState("")
    const [hikeComments, setHikeComments] = useState([])
   
    useEffect(() => {
        fetch(`/comments`)
        .then((r) => r.json())
        .then((currentComments) => setComments(currentComments.map(c => c)))
        }, [])

    function handleComments(h) {
      let hComments = comments.filter(c => c.hike.id === h.id)
       if (hComments.length > 0) {
        setHikeComments(hComments);
       } 
       else {
        setHikeComments([{text: "No comments yet"}])
       }
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
    .then(newComm => {
        setComments([...comments, newComm])
        setHikeComments([...hikeComments, newComm]);
    }) 
   }
   function handleCommentChange(e){
    e.preventDefault();
    setNewComment(e.target.value)
   }
    // function handleSubmitStatus(e) {
    //     e.preventDefault();
    //     fetch(`/hikerhikes/${hikerhike.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ status: newStatus }),
    //     })
    //     .then((r) => r.json())
    //     .then((updatedHikerHike) => setHH(updatedHikerHike))   
    //  }
    return(
        <div>
            <ul className={h.location} key={h.location}>{h.name} - {h.location} - {h.distance} miles - {h.difficulty}
            <br></br><button onClick={handleLikes}><FaThumbsUp />    {h.likes}     
</button>
       <ul key={h.name} className={h.name} onClick={() => handleComments(h)}>Comments (click to view)</ul>
          {hikeComments !== [] || hikeComments.length > 0 ? 
             hikeComments.map(c => <li>{c.text}</li> )
           : <p>None</p> } 
           <button style={{display: user ? 'visible' : 'none' }} onClick={() => handleCommentForm()}>Add Comment</button>
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