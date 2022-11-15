import React, { useState } from "react"; 
import { FaThumbsUp } from "react-icons/fa"

function HikeCard({ updateWithComment, handleLikeAdd, userHikes, setUserHikes, hikes, setHikes, hikeComments, setHikeComments, setErrors, setIsOpen, hike, setHike, user, userHike }) {
    const [commentsDisplayed, setCommentsDisplayed] = useState(false)
    const [commentForm, setCommentForm] = useState(false)
    const [newComment, setNewComment] = useState("")
    // let toupdate; 
    // let idx;
    let myH = null; 
    if (userHikes) {
        myH = userHikes.find(uH => uH.hike_id === hike.id)
    }
    function handleComments() {
        setCommentsDisplayed(!commentsDisplayed)
    }
    function handleCommentForm() {
        setCommentForm(!commentForm)
    }
    function handleLikes(e) {
        e.preventDefault();
        handleLikeAdd(hike)

        // const newLikes = hike.likes++
        // fetch(`/hikes/${hike.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ likes: newLikes }),
        // })
        // .then((r) => r.json())
        // .then((updatedHike) => {
        //     // toupdate = hikes.find(h => h.id === hike.id)
        //     // idx = hikes.indexOf(toupdate)
        //     setHike(updatedHike)
        //         // setHikes(hikes.splice(idx, 1, updatedHike))
        // })
    }
    function handleAddComment(e){
    e.preventDefault();
   let hkrhk = userHikes.find(h => h.hike_id === hike.id && h.hiker_id === user.id)
   updateWithComment(hkrhk, newComment)
//    fetch ("/comments", {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             text: newComment,
//             hikerhike_id: hkrhk.id        
//         })
//         })
//          .then((r) => {
//         if (r.ok) {
//            r.json().then((comm) => {
//             if (hikeComments === null) {
//                 setHikeComments([comm])
//             }
//             else {
//                 setHikeComments([...hikeComments, comm])
//             }
//            }) 
//              }
//          else {
//          r.json()
//             .then((errorInfo) => {
//                 setErrors(errorInfo.errors)
//                 setIsOpen(true)
//             })
//          }
//         })

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
            <ul key={hike.id}>{hike.name} - {hike.location} - {hike.distance} miles - {hike.difficulty}
            <br></br><button style={{display: myH ? 'visible' : 'none' }} onClick={handleLikes}><FaThumbsUp /> </button><h5>Likes: {hike.likes}</h5>
            <ul key={hike.name} className={hike.name} onClick={handleComments}>Comments (click to view)</ul> 
                {commentsDisplayed && hikeComments === null ? <li>No Comments Yet</li> : null} 
                {commentsDisplayed && hikeComments !== null && hikeComments.length > 1 ? hikeComments.map(c => <div><li>"{c.text}" -{c.author.hikername}</li>
                {user && myH ? <button onClick={(e) => handleDeleteComment(c)}>-</button> : null } </div> ) : null}
                {commentsDisplayed && hikeComments !== null && hikeComments.length === 1 ? <div><li>"{hikeComments[0].text}" -{hikeComments[0].author.hikername}</li>
                {user && myH ? <button onClick={(e) => handleDeleteComment(hikeComments[0])}>-</button> : null} 
                </div>: null}  
            </ul> 
           <button style={{display: myH ? 'visible' : 'none' }} onClick={() => handleCommentForm()}>Add Comment</button>
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