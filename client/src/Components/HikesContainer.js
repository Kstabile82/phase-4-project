import React, { useState, useEffect } from "react"; 
import AddNewHike from "./AddNewHike";
import HikeCard from "./HikeCard";

//filter by state, difficulty, distance
function HikesContainer({ user }) {
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
      function addToMyHikes(e) {
          e.preventDefault();
        //   console.log(user.hikerhikes[0].hikemethod.id)
        let hikeToAdd = hikes.find(h => h.name === e.target.className)
        //post to myHikes
      }
    //   function handleUpdateHike(updatedHike) {
    //     setHikes((hikes) =>
    //       hikes.map((hike) => {
    //         return hike.id === updatedHike.id ? updatedHike : hike;
    //       })
    //     );
    //   }
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
          {hikes.map(h => <div key={h.id}> 
              <HikeCard hike={h} /> 
              {user ? <button className={h.name} onClick={addToMyHikes}>+</button> : null} 
              </div> )} 
          <AddNewHike hikes={hikes} setHikes={setHikes} />
        </div>
    );
}
export default HikesContainer;