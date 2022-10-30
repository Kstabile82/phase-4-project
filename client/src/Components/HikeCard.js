import React, { useState } from "react"; 
import { FaThumbsUp } from "react-icons/fa"

function HikeCard({ hike, user, setHikes, setDisplayedHikes, hikes, displayedHikes }) {
    const [comments, setComments] = useState([])
    const [commentForm, setCommentForm] = useState(false)
    const [newComment, setNewComment] = useState("")
    const [hikeComments, setHikeComments] = useState([])
    const [h, setH] = useState(hike)

    function handleComments(hike) {
    fetch("/findcomments", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ hike_id: hike.id }),
    })
    .then((r) => r.json())
    .then((comms) => {
        if (comms.length > 0) {
        setHikeComments(comms)
        } 
        else {
            setHikeComments(['none'])
        }
    })
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
   }
   function handleDeleteComment(c) {
           fetch(`/comments/${c.id}`, { 
           method: 'DELETE'
       })
       setHikeComments(hikeComments.filter(hc => hc.id !== c.id))
   }
   function handleDeleteHike(e) {
    e.preventDefault(); 
    let idToDel = hike.id
        fetch(`/hikes/${idToDel}`, { 
            method: 'DELETE'
        })
        setHikes(hikes.filter(h => h.id !== idToDel))
        setDisplayedHikes(displayedHikes.filter(dh => dh.id !== idToDel))
      }
    return(
        <div>
            <ul className={hike.location} key={hike.location}>{hike.name} - {hike.location} - {hike.distance} miles - {hike.difficulty}
            <br></br><button style={{display: user ? 'visible' : 'none' }} onClick={handleLikes}><FaThumbsUp /> </button><h5>Likes: {hike.likes}</h5>
            <ul key={hike.name} className={hike.name} onClick={() => handleComments(h)}>Comments (click to view)</ul> 
                {hikeComments[0] === "none" ? <li>No Comments Yet</li> : null} 
                {hikeComments[0] !== "none" && hikeComments.length > 1 ? hikeComments.map(c => <div><li>"{c.text}" -{c.author.hikername}</li>
                {user && c.author.id === user.id ? <button onClick={(e) => handleDeleteComment(c)}>-</button> : null } </div> ) : null}
                {hikeComments[0] !== "none" && hikeComments.length === 1 ? <div><li>"{hikeComments[0].text}" -{hikeComments[0].author.hikername}</li>
                {user && hikeComments[0].author.id === user.id ? <button onClick={(e) => handleDeleteComment(hikeComments[0])}>-</button> : null} 
                </div>: null}
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
            { user && user.admin ? <button onClick={handleDeleteHike}>Delete Hike</button> : null}
           
        </div>
    )
}
export default HikeCard; 