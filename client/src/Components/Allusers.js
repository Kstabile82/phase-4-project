import React from "react";

function Allusers({ user, admin, users, setUsers }) {
    // useEffect(() => {
    //     fetch("/showallusers")
    //     .then((r) => r.json())
    //     .then((usrs) => setUsers(usrs));
    //     }, [])
    return (
        <div>
            <ul key="admins">Admins:
               {users.map(u => u.admin ? <li key={u.id}>{u.hikername}</li> : null )}
            </ul>
           <ul key="nonadmins">Other Users:
            {users.map(u => !u.admin ? <li key={u.id}>{u.hikername}</li> : null )}
           </ul>
        </div>
    )
}
export default Allusers; 