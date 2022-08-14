// import React, { useState } from "react";
// function AddNewHike({ hikes, alert, postNewHike }) { 
//     const [added, setAdded] = useState("");
//     const [name, setName] = useState("");
//     const [difficulty, setDifficulty] = useState("");
//     const [category, setCategory] = useState("");
//     let successText = "Thanks! Your hike has been added to the database.";
//     let errorText = "You didn't complete all the fields, please try again.";
//     let takenText = "We already have a hike by that name in our database, please use a more specific name."
//     function handleAdd(e) {
//         e.preventDefault();
//         if (e.target.name === "name") {
//            setName(e.target.value);
//         }
//         else if (e.target.name === "location") {
//             setLocation(e.target.value);
//         }
//         else if (e.target.name === "difficulty"){
//             setDifficulty(e.target.value);
//         }

//     }
//     let newHike = {
//         name,
//         difficulty,
//         location,
//     }
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (location == "" || difficulty == "" || name == "") {
//             setAdded("false") 
//             alert.error(errorText)
//         }
//         else {
//         let findMatch = hikes.find(hike => hike.name.toLowerCase() === name.toLowerCase());
//         if (findMatch === undefined) {
//             postNewHike(newHike)
//             setAdded("true")
//             alert.success(successText)
//             // fetch ("http://localhost:3000/hikes", {
//             //     method: "POST",
//             //     headers: {
//             //     "Content-Type": "application/json",
//             //     },
//             //     body: JSON.stringify(newHike)
//             //     })
//             // .then((r) => r.json())
//             // .then(hike => setHikes([...hikes, hike]))
//             // setAdded("true");
//         }
//          else {
//             setAdded("taken");
//             alert.error(takenText)
//         }
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
//     return (
//         <div className="add-hike-form">
//             <h3>Add New Hike</h3>
//             <form onSubmit={handleSubmit}>
//             {/* {added === "true" ? <Dashboard theText={successText} /> : null }
//             {added === "false" ? <Dashboard theText={errorText} /> : null}
//             {added === "taken" ? <Dashboard theText={takenText} /> : null} */}
//                 <input onChange={handleAdd}
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 ></input>
//                 <input onChange={handleAdd}
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 ></input>
//                 <select name="difficulty" id="difficulty" onChange={handleAdd}>
//                 <option value="" hidden>Difficulty</option>
//                 <option value="beginner">Beginner</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="advanced">Advanced</option>
//                 </select>
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// }
// // export default AddNewHike; 