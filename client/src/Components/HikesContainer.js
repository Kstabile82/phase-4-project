import React, { useState, useEffect } from "react"; 
import AddNewHike from "./AddNewHike";
import HikeCard from "./HikeCard";

function HikesContainer({ user }) {
    const [hikes, setHikes] = useState([]);
    let locations = [];
    const [displayedHikes, setDisplayedHikes] = useState([]);
    const [filterL, setFilterL] = useState([]);
    const [filterD, setFilterD] = useState([]);
    const [likesChecked, setLikesChecked] = useState(false);
    const [distChecked, setDistChecked] = useState(false);
    let filterLoc;
    let filterDiff; 
    let filterMatchArray = []
    let locMatches = [];
    let diffMatches = [];
   
    useEffect(() => {
        fetch("/hikes")
        .then((r) => r.json())
        .then((currentHikes) => {
            setHikes(currentHikes);
            setDisplayedHikes(currentHikes);
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
          .then((hike) => setHikes([...hikes, hike]))
      }
    function handleFilterChange(e) {
        e.preventDefault();
        setDisplayedHikes(hikes)
        if(e.target.name === "location") {
            filterLoc = e.target.value;
            setFilterL(filterLoc)
        }
        if(e.target.name === "difficulty") {
            filterDiff = e.target.value;
            setFilterD(filterDiff)
        }
    }
    filterMatchArray = hikes;
    function handleSubmitFilter(e) {
        e.preventDefault();
        if (filterL === undefined || filterL === "All") {
            locMatches = hikes; 
        }
        else {
            locMatches = hikes.filter(h => h.location === filterL)
        }
        if (filterD === undefined || filterD === "All") {
            diffMatches = locMatches; 
        }
        else {
            diffMatches = locMatches.filter(h => h.difficulty.toLowerCase() === filterD.toLowerCase())
        }
        setDisplayedHikes(diffMatches)
    }
    function handleSort(e) {
        e.preventDefault();
        setLikesChecked(!likesChecked)
        setDistChecked(!distChecked)
        if (e.target.name === "sortbylikes" && e.target.checked === true) {
                displayedHikes.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
        }
        else if (e.target.name === "sortbylikes" && e.target.checked === false) {
            displayedHikes.sort((a,b) => (a.likes > b.likes) ? 1 : -1)
        }
        else if(e.target.name === "sortbydistance" && e.target.checked === true) { 
                displayedHikes.sort((a,b) => (a.distance > b.distance) ? -1 : 1)
        }
        else if(e.target.name === "sortbydistance" && e.target.checked === false) { 
            displayedHikes.sort((a,b) => (a.distance > b.distance) ? 1 : -1)
      }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmitFilter}>Filter
                <select name="difficulty" id="difficulty" onChange={handleFilterChange}>
                <option value="" hidden>Difficulty</option>
                <option value="Advanced" >Advanced</option>
                <option value="Beginner" >Beginner</option>
                <option value="Intermediate" >Intermediate</option>
                <option value="All" >All</option>
                </select>
                <select name="location" id="location" onChange={handleFilterChange}>
                <option value="" hidden>Location</option>
                {locations.map(l =>
                <option value={l}>{l}</option>
                )}
                <option value="All">All</option>
                </select>
                <button>Enter</button>
            </form>
            <label name="sortbylikes"> Likes (most to fewest) 
             <input name="sortbylikes" id="sortLikes" type="checkbox" onChange={handleSort} />
            </label>
            <label name="sortbydistance"> Distance (longest to shortest) 
             <input name="sortbydistance" id="sortDistance" type="checkbox" onChange={handleSort} />
            </label>
          {displayedHikes.map(h => <div key={h.id}> 
              <HikeCard hike={h} /> 
              {user ? <button className={h.name} onClick={addToMyHikes}>+</button> : null} 
              </div> )} 
          <AddNewHike hikes={hikes} setHikes={setHikes} />
        </div>
    );
}
export default HikesContainer;