import React, { useState, useEffect } from "react"; 
import AddNewHike from "./AddNewHike";
import HikeCard from "./HikeCard";

function HikesContainer({ user }) {
    // const [clicked, setClicked] = useState("");
    const [hikes, setHikes] = useState([]);
    let locations = [];
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
        hikes.map(h => {
            if (!locations.includes(h.location)) {
               locations.push(h.location)
            }
        })
      function addToMyHikes(e) {
        e.preventDefault();
        let hikeToAdd = hikes.find(h => h.name === e.target.className)
        fetch("/myhikes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              hiker_id: user.id,
              hike_id: hikeToAdd.id,
              status: "Bucket list"
                    }),
          })
          .then((r) => r.json())
          .then((hike) => setHikes([...hikes,hike]));
      }
    
    function handleFilterChange(e) {
        e.preventDefault();
        if(e.target.name === "location") {
            console.log(e.target.value)
        }
        if(e.target.name === "difficulty") {
            console.log(e.target.value)
        }
    }
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
            <form>Filter
                <select name="difficulty" id="difficulty" onChange={handleFilterChange}>
                <option value="" hidden>Difficulty</option>
                <option value="Difficult" >Difficult</option>
                <option value="Beginner" >Beginner</option>
                <option value="Moderate" >Moderate</option>
                </select>
                <select name="location" id="location" onChange={handleFilterChange}>
                <option value="" hidden>Location</option>
                {locations.map(l =>
<option value={l}>{l}</option>
                )}
                </select>
            </form>
          {hikes.map(h => <div key={h.id}> 
              <HikeCard hike={h} /> 
              {user ? <button className={h.name} onClick={addToMyHikes}>+</button> : null} 
              </div> )} 
          <AddNewHike hikes={hikes} setHikes={setHikes} />
        </div>
    );
}
export default HikesContainer;