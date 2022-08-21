import React, { useState } from "react";
function AddNewHike({ hikes, setHikes }) { 
    const [added, setAdded] = useState("");
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState(0);


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
        let findMatch = hikes.find(hike => hike.name.toLowerCase() === name.toLowerCase());
        if (findMatch === undefined) {
            postNewHikes(newHike)
            setAdded("true")
            // fetch ("/hikes", {
            //     method: "POST",
            //     headers: {
            //     "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(newHike)
            //     })
            // .then((r) => r.json())
            // .then(hike => setHikes([...hikes, hike]))
            // setAdded("true");
        }
         else {
            setAdded("taken");
        }
    }
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
    .then(hike => setHikes([...hikes, hike]))

    // .then(hike => setHikes([...hikes, hike], setMatches([...hikes, hike])))
}
    return (
        <div className="add-hike-form">
            <h3>Add New Hike</h3>
            <form onSubmit={handleSubmit}>
            {/* {added === "true" ? <Dashboard theText={successText} /> : null }
            {added === "false" ? <Dashboard theText={errorText} /> : null}
            {added === "taken" ? <Dashboard theText={takenText} /> : null} */}
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
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                </select>
                <input onChange={handleAdd}
                type="text"
                name="distance"
                placeholder="Miles"
                ></input>
                <button>Submit</button>
            </form>
            {added ? <p>Thanks, your hike was added!</p> : null}
        </div>
    );
}
export default AddNewHike; 