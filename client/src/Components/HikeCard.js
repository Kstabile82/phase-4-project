import React, { useState } from "react"; 
import { FaThumbsUp } from "react-icons/fa"
import ReactModal from 'react-modal';

function HikeCard({ setErrors, setIsOpen, hh, hike, user, setHikes, setDisplayedHikes, hikes, displayedHikes }) {
    const [commentsDisplayed, setCommentsDisplayed] = useState(false)
    const [commentForm, setCommentForm] = useState(false)
    const [newComment, setNewComment] = useState("")
    const [hikeComments, setHikeComments] = useState(null)
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
        // else {
        //     setHikeComments(['none'])
        // }
    })
    setCommentsDisplayed(!commentsDisplayed)
    }

    function handleCommentForm() {
        setCommentForm(!commentForm)
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
         .then((r) => {
        if (r.ok) {
           r.json().then((comm) => {
            if (hikeComments === null) {
                setHikeComments(comm)
            }
            else {
                setHikeComments([...hikeComments, comm])
            }
           }) 
             }
         else {
         r.json()
            .then((errorInfo) => {
                setErrors(errorInfo)
                setIsOpen(true)
            })
                }
        })
    // .then((r) => r.json())
    // .then(newComm => {
    //     // setComments([...comments, newComm])
    //     if (hikeComments.length > 0) {
    //         setHikeComments([...hikeComments, newComm])
    //     }
    //     if (hikeComments === ['none']) {
    //         setHikeComments([newComm])
    //     }
    // }) 
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
    return(
        <div>
            <ul className={hike.location} key={hike.location}>{hike.name} - {hike.location} - {hike.distance} miles - {hike.difficulty}
            <br></br><button style={{display: user ? 'visible' : 'none' }} onClick={handleLikes}><FaThumbsUp /> </button><h5>Likes: {hike.likes}</h5>
            <ul key={hike.name} className={hike.name} onClick={() => handleComments(h)}>Comments (click to view)</ul> 
                {commentsDisplayed && hikeComments === null ? <li>No Comments Yet</li> : null} 
                {commentsDisplayed && hikeComments !== null && hikeComments.length > 1 ? hikeComments.map(c => <div><li>"{c.text}" -{c.author.hikername}</li>
                {user && c.author.id === user.id ? <button onClick={(e) => handleDeleteComment(c)}>-</button> : null } </div> ) : null}
                {commentsDisplayed && hikeComments !== null && hikeComments.length === 1 ? <div><li>"{hikeComments[0].text}" -{hikeComments[0].author.hikername}</li>
                {user && hikeComments[0].author.id === user.id ? <button onClick={(e) => handleDeleteComment(hikeComments[0])}>-</button> : null} 
                </div>: null}  
            </ul> 
           <button style={{display: user && hh && hh.includes(hike) ? 'visible' : 'none' }} onClick={() => handleCommentForm()}>Add Comment</button>
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