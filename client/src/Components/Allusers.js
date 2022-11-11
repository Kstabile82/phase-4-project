import React from "react";

function Allusers({ admins, setAdmins, nonAdmins, setNonAdmins, user, admin, users, setUsers }) {
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
        setAdmins([...admins, updatedHiker])
        setNonAdmins(nonAdmins.filter(nas => nas.id !== updatedHiker.id))
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
        .then((toDelete) => {
            setNonAdmins([...nonAdmins, toDelete])
            setAdmins(admins.filter(as => as.id !== toDelete.id))

        })   
    }
    return (
        <div>
            <ul key="admins">Admins:
               {admins.map(a => <div><li key={a.id}>{a.hikername}</li><button onClick={(e) => handleDeleteAdmin(e, a)}>Delete Admin</button></div> )}
            </ul>
           <ul key="nonadmins">Other Users:
            {nonAdmins.map(na => <div><li key={na.id}>{na.hikername}</li> <button onClick={(e) => handleAddAdmin(e, na)}>Make Admin</button></div> )}
           </ul>
        </div>
    )
}
export default Allusers; 