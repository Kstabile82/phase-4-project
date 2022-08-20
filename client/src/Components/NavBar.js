// import React from "react";
import { Link } from "react-router-dom";

function NavBar({ hiker, onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
      <header>
        <h1>
          <Link to="/">Home          </Link>
          <Link to="/login">Login          </Link>
          <Link to="/signup">Sign Up         </Link>
          <Link to="/hikes">Hikes</Link>

        </h1>
        {/* {hiker ? (
          <div>
            <p>Welcome, {hiker.hikername}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        

        )} */}
      </header>
    );
  }
      export default NavBar;



// function NavBar({ onLogout }) {
    // function handleLogout() {
    //     fetch("/logout", {
    //       method: "DELETE",
    //     }).then(() => onLogout());
    //   }
//         return (
//             <header style={{
//                 position: 'absolute', left: '50%', top: '50%',
//                 transform: 'translate(-50%, -50%)'
//             }}> 
//             <nav className="navbar">
//                         <Link exact to="/">Home</Link>
//                         <Link to="/Login">
//                             Login
//                             </Link>
                            // <button onClick={handleLogout}>Logout</button>

//                             <Link to="/Signup">
//                             Signup
//                             </Link>
//                             <Link to="/HikesContainer">
//                             Hikes
//                             </Link>
//              </nav>
//             </header>
//         );
//     }
 
//     export default NavBar;