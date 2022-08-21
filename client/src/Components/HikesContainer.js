import React, { useState, useEffect } from "react"; 
import AddNewHike from "./AddNewHike";
// import MyHikes from "./MyHikes";
// import Card from "./Card";

//filter by state, difficulty, distance
function HikesContainer() {
    // const [clicked, setClicked] = useState("");
    const [hikes, setHikes] = useState([]);
    // const [addedHikees, setAddeHikes] = useState([]);
    // const [matches, setMatches] = useState(hikes);
    // const [checked, setChecked] = useState(false);
    // const [isSubmitted, setSubmitted] = useState("")
    useEffect(() => {
        fetch("/hikes")
        .then((r) => r.json())
        .then((currentHikes) => {
            setHikes(currentHikes);
            // setMatches(currentHikes);
            // setSubmitted("true")
         });
        }, [])
        // hikes.map(h => console.log(h.hikerhikes))
        function handleComments(e) {
            e.preventDefault();
            // console.log(e.target.className)
        }
    // function handleClicked(e, hike) {
        // setClicked(hike.name)
    // }
    // function handleClick(e) {
        // if (!addedHikes.includes(e.target.parentElement.firstChild.innerText)) {
        //     setAddedHikes([...addedHikes, e.target.parentElement.firstChild.innerText]); 
        // }
    // }
    // function handleSortByLikes(e) {
    //     setChecked(!checked)
    //     if (e.target.checked === true) {
    //         matches.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
    //     }
    //     else {
    //         matches.sort((a,b) => (a.id > b.id) ? 1 : -1)
    //     }
    // }

    return (
        <div className="container">
          {hikes.map(h => <ul className={h.location} key={h.location}>{h.name} - {h.location} - {h.distance} miles - {h.difficulty}<li key={h.name} className={h.name} onClick={handleComments}>Comments</li><li key={h.likes}>Likes: {h.likes}</li></ul>)}
          <AddNewHike hikes={hikes} setHikes={setHikes} />
        </div>
               );
}
export default HikesContainer;