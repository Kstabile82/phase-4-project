import React, { useState } from "react"; 
import MyHikes from "./MyHikes";

function Welcomepage({ handleDeleteUser, user, userHikes, setUserHikes, loggedOut, setLoggedOut, onLogout, handleDeleteHH }) {
const [myHikes, setMyHikes] = useState([]);

    function handleDelete(e){
      e.preventDefault();
      fetch(`/deleteme/${user.id}`, { method: "DELETE" }).then((r) => {
        if (r.ok) {
          handleDeleteUser(user);
        }
    })
    }

    function onDelete(id) {
      const updatedHikes = myHikes.filter((hike) => hike.id !== id);
      setMyHikes(updatedHikes)
    }
return (
    <div>
        Welcome, {user.hikername}!
        <br></br><br></br>
        <button onClick={handleDelete}>Delete My Account</button>

        {/* {user.hikerhikes.length > 0 ? <MyHikes onDelete={onDelete} user={user} myHikes={myHikes} setMyHikes={setMyHikes} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH} /> : null} */}
    </div>
)
}
 export default Welcomepage; 