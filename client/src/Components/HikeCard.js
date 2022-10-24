import React, { useState, useEffect } from "react"; 
import { FaThumbsUp } from "react-icons/fa"
import HikesContainer from "./HikesContainer";

function HikeCard({ userHikes, setUserHikes, hike, user }) {
    const [h, setH] = useState(hike)
    const [comments, setComments] = useState([])
    const [commentForm, setCommentForm] = useState(false)
    const [newComment, setNewComment] = useState("")
    const [hikeComments, setHikeComments] = useState([])
   
    // useEffect(() => {
    //     fetch(`/comments`)
    //     .then((r) => r.json())
    //     .then((currentComments) => setComments(currentComments.map(c => c)))
    //     }, [])
    function handleComments(h) {
     let hComments = comments.filter(c => c.hike.id === h.id)
     if (hComments.length > 0) {
        setHikeComments(hComments);
       } 
       else {
        setHikeComments(["none"])
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
   let hkrhk = user.hikerhikes.find(h => h.hike_id === hike.id && h.hiker_id === user.id)
   fetch ("/comments", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: newComment,
            hikerhike_id: hkrhk.id 
        })
        })
    .then((r) => r.json())
    .then(newComm => {
        setComments([...comments, newComm])
        if (hikeComments.length > 0) {
            setHikeComments([...hikeComments, newComm])
        }
        else {
            setHikeComments([newComm])
        }
    }) 
   }
   function handleCommentChange(e){
    e.preventDefault();
    setNewComment(e.target.value)
    console.log(e.target.value)
   }
   function handleDeleteComment(c) {
           fetch(`/comments/${c.id}`, { 
           method: 'DELETE'
       })
       setHikeComments(hikeComments.filter(hc => hc.id !== c.id))
   }
    return(
        <div>
            <ul className={h.location} key={h.location}>{h.name} - {h.location} - {h.distance} miles - {h.difficulty}
            <br></br><button onClick={handleLikes}><FaThumbsUp />    {h.likes} </button>
            <ul key={h.name} className={h.name} onClick={() => handleComments(h)}>Comments (click to view)</ul> 
                {hikeComments[0] === "none" ? <li>No Comments Yet</li> : null} 
                {hikeComments[0] !== "none" && hikeComments.length > 1 ? hikeComments.map(c => <div><li>"{c.text}" -{c.hikerhike_id}</li><button onClick={(e) => handleDeleteComment(c)}>-</button></div> ) : null}
                {hikeComments[0] !== "none" && hikeComments.length === 1 ? <div><li>"{hikeComments[0].text}" -{hikeComments[0].hikerhike_id}</li><button onClick={(e) => handleDeleteComment(hikeComments[0])}>-</button> </div>: null}
            </ul> 
           <button style={{display: user ? 'visible' : 'none' }} onClick={() => handleCommentForm()}>Add Comment</button>
            {commentForm ? <form onSubmit={handleAddComment}>
                <input onChange={handleCommentChange}
                type="text"
                name="comment"
                placeholder="Enter text here"
                ></input>
                <button>Submit</button>
            </form> : null}
           
        </div>
    )
}
export default HikeCard; 