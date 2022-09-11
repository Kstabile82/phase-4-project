import React, { useState } from "react"; 
import MyHikes from "./MyHikes";

function Welcomepage({ user, userHikes, setUserHikes, loggedOut, setLoggedOut, onLogout, handleDeleteHH }) {
const [myHikes, setMyHikes] = useState([]);

    function handleDelete(e){
      e.preventDefault();
      fetch("/deleteme", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          handleDelete(user);
        }
    })
    }
return (
    <div>
        Welcome, {user.hikername}!
        <button onClick={handleDelete}>Delete My Account</button>
        {user.hikerhikes.length > 0 ? <MyHikes user={user} myHikes={myHikes} setMyHikes={setMyHikes} userHikes={userHikes} setUserHikes={setUserHikes} handleDeleteHH={handleDeleteHH} /> : null}

    </div>
)

}
 export default Welcomepage; 