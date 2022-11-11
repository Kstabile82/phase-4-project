import React, { useState } from "react";

function AddNewHike({ setIsOpen, setErrors, hikes, displayedHikes, setDisplayedHikes, setHikes }) { 
    const [added, setAdded] = useState(false);
    const [name, setName] = useState(null);
    const [difficulty, setDifficulty] = useState(null);
    const [location, setLocation] = useState(null);
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
    function handleSubmit(e) {
        e.preventDefault();
        fetch ("/hikes", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                difficulty,
                location,
                distance, 
                likes: 0
            })
            })
            .then((r) => {
            if (r.ok) {
            r.json().then((hike) => {
                setHikes([...hikes, hike])
                setDisplayedHikes([...displayedHikes, hike])
                setAdded(true)
                setShowingForm(false);
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
        </div>
    );
}
export default AddNewHike; 