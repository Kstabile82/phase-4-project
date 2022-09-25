// import { useImperativeHandle } from "react";
import { Link } from "react-router-dom";

function NavBar({ onLogout, loggedOut, setLoggedOut }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
      setLoggedOut(true)
    }
    return (
      <header>
        <h1>
          {loggedOut ? <Link to="/">Home          </Link> : null}
          {!loggedOut ? <Link to="/welcomepage">Welcome Page</Link> : null}
          {loggedOut ? <Link to="/login">Log In</Link> : null } 
          {!loggedOut ? <Link to="/myhikes">My Hikes</Link> : null }
          {loggedOut ? <Link to="/signup">Sign Up </Link> : null }
          <Link to="/hikes">Hikes</Link>
          {!loggedOut ? <Link to="/" onClick={handleLogout}>Log Out</Link> : null }

        </h1>
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