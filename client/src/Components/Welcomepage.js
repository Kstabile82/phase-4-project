import React from "react"; 

function Welcomepage({ user, handleLogout }) {
    function handleDelete(e){
      e.preventDefault();
      fetch(`/deleteme/${user.id}`, { method: "DELETE" }).then((r) => {
        if (r.ok) {
          handleLogout();
        }
    })
    }
return (
    <div>
        <br></br><br></br>
        <button onClick={handleDelete}>Delete My Account</button>
    </div>
)
}
 export default Welcomepage; 