//MGA INPORTS
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
  } else if (username === "user" && password === "1234") {
    setPage("USERHOME");
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
    <li className="list"><a href="#">Dashboard</a></li>
    <li className="list"><a href="#">User Management</a></li>
    <li className="list"><a href="#">Listings</a></li>
    <li className="list"><a href="#">Reports</a></li>
    <li className="list"><a href="#">Settings</a></li>
    <li>
      <button onClick={() => setPage("login")}>Log out</button>
    </li>
  </ul>
</nav>
<br></br>
    <h1>DASHBOARD</h1>

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

  </div>
)}
  
{page === "USERHOME" && (
  <div id="userhome">

    <nav className="navbar">

      <div className="logo">LearnLoop</div>

      <ul className="nav-links">
        <li className="list"><a href="#">Browse</a></li>
        <li className="list"><a href="#">Matches</a></li>
        <li className="list"><a href="#">Exchanges</a></li>
        <li className="list"><a href="#">Messages</a></li>
        <li className="list"><a href="#">Profile</a></li>

        <li>
          <button onClick={() => setPage("login")}>
            Logout
          </button>
        </li>
      </ul>

    </nav>

    <div className="feed">

      <div className="post">

        <div className="post-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
          />

          <div>
            <h3>Priya N.</h3>
            <small>2 hours ago</small>
          </div>
        </div>

        <p><strong>Offers:</strong> Conversational Spanish</p>
        <p><strong>Wants:</strong> Intro to Python</p>

        <p>
          Weekly 30-minute chats. I'll help you improve
          your Spanish while you teach me Python.
        </p>

        <div className="post-actions">
          <span>👍 12 Likes</span>
          <span>💬 4 Comments</span>
        </div>

        <button className="exchange-btn">
          Propose Exchange
        </button>

      </div>

      <div className="post">

        <div className="post-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
          />

          <div>
            <h3>Marcus O.</h3>
            <small>Yesterday</small>
          </div>
        </div>

        <p><strong>Offers:</strong> Graphic Design</p>
        <p><strong>Wants:</strong> React JS</p>

        <p>
          Looking for someone who can teach me React.
          I can teach Photoshop and Illustrator.
        </p>

        <div className="post-actions">
          <span>👍 8 Likes</span>
          <span>💬 2 Comments</span>
        </div>

        <button className="exchange-btn">
          Propose Exchange
        </button>

      </div>

    </div>

  </div>
)}
Sent
Compose
Write to

</>
)
}
export default App