import React, { useState, useEffect } from "react"; 
// import AddNewHike from "./AddNewHike";
// import MyHikes from "./MyHikes";
// import Card from "./Card";

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
     console.log(hikes)
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
    // function postNewHikes(newHike) {
    //     fetch ("http://localhost:3000/hikes", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newHike)
    //         })
    //     .then((r) => r.json())
    //     .then(hike => setHikes([...hikes, hike], setMatches([...hikes, hike])))
    // }
    return (
        <div className="container">
          {hikes.map(h => <li>{h.name}</li>)}
        </div>
               );
}
export default HikesContainer;