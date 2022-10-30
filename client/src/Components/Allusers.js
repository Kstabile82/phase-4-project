import React from "react";

function Allusers({ user, admin, users, setUsers }) {
    console.log(users)

    function handleAddAdmin(e, u) {
     fetch(`/hikers/${u.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ admin: true }),
    })
    .then((r) => r.json())
    .then((updatedHiker) => {
      let idx = users.indexOf(u)
      users.splice(idx, 1, updatedHiker)
      setUsers(users)
    })   
} 
    function handleDeleteAdmin(e, u) {
        fetch(`/hikers/${u.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ admin: false }),
        })
        .then((r) => r.json())
        .then((updatedHiker) => {
        //   let del = users.find(usr => usr.id === updatedHiker.id)
          let idx = users.indexOf(u)
          users.splice(idx, 1, updatedHiker)
          setUsers(users)
        })   
    }
    return (
        <div>
            <ul key="admins">Admins:
               {users.map(u => u.admin ? <div><li key={u.id}>{u.hikername}</li><button onClick={(e) => handleDeleteAdmin(e, u)}>Delete Admin</button></div> : null )}
            </ul>
           <ul key="nonadmins">Other Users:
            {users.map(u => !u.admin ? <div><li key={u.id}>{u.hikername}</li> <button onClick={(e) => handleAddAdmin(e, u)}>Make Admin</button></div>: null )}
           </ul>
        </div>
    )
}
export default Allusers; 