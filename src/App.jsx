
import { useState } from "react";
import "./App.css";

function App(){
const [username, setUsername] = useState(""); 
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [page, setPage] = useState("login");


function handleLogin() {
    if (username === "admin" && password === "1234") {
      setPage("ADMINHOME");
    } else {
      alert("Invalid username or password.");
    }
  }

return(
  
  <>
 
 {page === "login" && (


  <div id="container">

    <title>Login Form</title>

    <h1>LEARN LOOP</h1>
     <h3>LOG IN</h3>
    <br></br>
  
<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
 <br></br>
<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
 <br></br>
<button onClick={handleLogin}>Login</button>

 <br></br>
  <br></br>
<button onClick={() => setPage("register")}>Register</button>

  </div>
 )}

 

 
 {page === "register" && (

<div id="container">

    <title>Register Form</title>

    <h1>LEARN LOOP</h1>
     <h3>REGISTER</h3>
    <br></br>
  <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
 <br></br>
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
 <br></br>
<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
 <br></br>

 <br></br>
  <br></br>
  <button onClick={() => setPage("login")}>Back to Login</button>
  <br></br>
<button onClick={() => setPage("login")}>Register</button>
  </div>
 )}



  
{page === "ADMINHOME" && (
  <div id="homecontainer">
  <nav className="navbar">
  <div className="logo">LearnLoop</div>

  <input type="checkbox" id="menu-toggle" className="menu-toggle" />
  <label htmlFor="menu-toggle" className="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </label>

  <ul className="nav-links">
    <li><a href="#">Dashboard</a></li>
    <li><a href="#">User Management</a></li>
    <li><a href="#">Skills Management</a></li>
    <li><a href="#">Tutoring Sessions</a></li>
    <li><a href="#">Ratings & Feedback</a></li>
    <li><a href="#">Settings</a></li>
    <li>
      <button onClick={() => setPage("login")}>Log out</button>
    </li>
  </ul>
</nav>
<br></br>
    <h1>WELCOME TO ADMIN HOME PAGE</h1>

    <div className="cards">
      <div className="card">
        <h2>5</h2>
        <p>Total Users</p>
      </div>

      <div className="card">
        <h2>10</h2>
        <p>Active Tutors</p>
      </div>

      <div className="card">
        <h2>3</h2>
        <p>Active Tutoring Sessions</p>
      </div>

      <div className="card">
        <h2>3453</h2>
        <p>Average User Rating</p>
      </div>
      
    </div>
        <div className="buttons">
      <button>Users</button>
      <button>Listings</button>
    </div>


    
  </div>
)}
  

 


</>
)
}
export default App