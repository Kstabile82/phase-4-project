import React, { useState } from "react"; 

function Welcomepage({ user, handleLogout }) {
const [myHikes, setMyHikes] = useState([]);

console.log(handleLogout)
    function handleDelete(e){
      e.preventDefault();
      fetch(`/deleteme/${user.id}`, { method: "DELETE" }).then((r) => {
        if (r.ok) {
          // handleDeleteUser(user);
          handleLogout();
        }
    })
    }

    // function onDelete(id) {
    //   const updatedHikes = myHikes.filter((hike) => hike.id !== id);
    //   setMyHikes(updatedHikes)
    // }
return (
    <div>
        Welcome, {user.hikername}!
        <br></br><br></br>
        <button onClick={handleDelete}>Delete My Account</button>
    </div>
)
}
 export default Welcomepage; 