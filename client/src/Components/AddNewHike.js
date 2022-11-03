import React, { useState } from "react";
function AddNewHike({ hikes, setHikes, displayedHikes, setDisplayedHikes }) { 
    const [added, setAdded] = useState("");
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState(0);
    const [showingForm, setShowingForm] = useState(false);

    function handleAdd(e) {
        e.preventDefault();
        if (e.target.name === "name") {
           setName(e.target.value);
        }
        else if (e.target.name === "location") {
            setLocation(e.target.value);
        }
        else if (e.target.name === "difficulty"){
            setDifficulty(e.target.value);
        }
        else if (e.target.name === "distance"){
            setDistance(e.target.value);
        }
    }
    function showAddForm(){
        setShowingForm(true)
    }

    let newHike = {
        name,
        difficulty,
        location,
        distance, 
        likes: 0
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (location === "" || difficulty === "" || name === "") {
            setAdded("false") 
        }
        else {
        let findMatch = hikes.find(hike => hike.name === name);
        if (findMatch === undefined) {
            postNewHikes(newHike)
            setAdded("true")
        }
         else {
            setAdded("taken");
        }
    }
    setShowingForm(false);
}
function postNewHikes(newHike) {
    fetch ("/hikes", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newHike)
        })
    .then((r) => r.json())
    .then(hike => {
        setHikes([...hikes, hike])
        setDisplayedHikes([...displayedHikes, hike])
    })
}
    return (
        <div className="add-hike-form">
            <button onClick={showAddForm}>Add New Hike</button>
            {showingForm ? <form onSubmit={handleSubmit}>
               <input onChange={handleAdd}
                type="text"
                name="name"
                placeholder="Name"
                ></input>
                <input onChange={handleAdd}
                type="text"
                name="location"
                placeholder="City, State"
                ></input>
                <select name="difficulty" id="difficulty" onChange={handleAdd}>
                <option value="" hidden>Difficulty</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                </select>
                <input onChange={handleAdd}
                type="text"
                name="distance"
                placeholder="Miles"
                ></input>
                <button className="formbutton">Submit</button>
            </form> : null} 
            {added ? <p>Thanks, your hike was added!</p> : null}
        </div>
    );
}
export default AddNewHike; 