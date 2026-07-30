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
        <li className="list" onClick={() => setPage("USERHOME")}>
          <a href="#">Browse</a>
        </li>
        <li className="list" onClick={() => setPage("MATCHES")}>
          <a href="#">Matches</a>
        </li>
        <li className="list" onClick={() => setPage("EXCHANGES")}>
          <a href="#">Exchanges</a>
        </li>
        <li className="list" onClick={() => setPage("MESSAGES")}>
          <a href="#">Messages</a>
        </li>
        <li className="list" onClick={() => setPage("PROFILE")}>
          <a href="#">Profile</a>
        </li>

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

    </div>

  </div>
)}


{page === "MATCHES" && (
  <div id="userhome">

    <nav className="navbar">

      <div className="logo">LearnLoop</div>

      <ul className="nav-links">

  <li
    className={`list ${page === "USERHOME" ? "active" : ""}`}
    onClick={() => setPage("USERHOME")}
  >
    Browse
  </li>

  <li
    className={`list ${page === "MATCHES" ? "active" : ""}`}
    onClick={() => setPage("MATCHES")}
  >
    Matches
  </li>

  <li
    className={`list ${page === "EXCHANGES" ? "active" : ""}`}
    onClick={() => setPage("EXCHANGES")}
  >
    Exchanges
  </li>

  <li
    className={`list ${page === "MESSAGES" ? "active" : ""}`}
    onClick={() => setPage("MESSAGES")}
  >
    Messages
  </li>

  <li
    className={`list ${page === "PROFILE" ? "active" : ""}`}
    onClick={() => setPage("PROFILE")}
  >
    Profile
  </li>

  <li>
    <button onClick={() => setPage("login")}>
      Logout
    </button>
  </li>

</ul>
Sent
Compose
Write to


    </nav>
<h1>🤝 My Matches</h1>

<div className="match-card">
  <img src="https://via.placeholder.com/70" alt="" />

  <div>
    <h3>John Doe</h3>
    <p>React ↔ Photoshop</p>
    <small>Matched 2 days ago</small>
  </div>

  <button>Message</button>
</div>

<div className="match-card">
  <img src="https://via.placeholder.com/70" alt="" />

  <div>
    <h3>Sarah Lee</h3>
    <p>English ↔ Java</p>
    <small>Matched Yesterday</small>
  </div>

  <button>Message</button>
</div>
    

  </div>
)}
{page === "EXCHANGES" && (
  <div id="userhome">

    <nav className="navbar">

      <div className="logo">LearnLoop</div>

      <ul className="nav-links">

  <li
    className={`list ${page === "USERHOME" ? "active" : ""}`}
    onClick={() => setPage("USERHOME")}
  >
    Browse
  </li>

  <li
    className={`list ${page === "MATCHES" ? "active" : ""}`}
    onClick={() => setPage("MATCHES")}
  >
    Matches
  </li>

  <li
    className={`list ${page === "EXCHANGES" ? "active" : ""}`}
    onClick={() => setPage("EXCHANGES")}
  >
    Exchanges
  </li>

  <li
    className={`list ${page === "MESSAGES" ? "active" : ""}`}
    onClick={() => setPage("MESSAGES")}
  >
    Messages
  </li>

  <li
    className={`list ${page === "PROFILE" ? "active" : ""}`}
    onClick={() => setPage("PROFILE")}
  >
    Profile
  </li>

  <li>
    <button onClick={() => setPage("login")}>
      Logout
    </button>
  </li>

</ul>
Sent
Compose
Write to


    </nav>

    <h1>📚 Exchange Requests</h1>

<div className="exchange-card">
  <h3>John Doe</h3>

  <p>
    Wants to learn: React
  </p>

  <p>
    Offers: Photoshop
  </p>

  <button>Accept</button>
  <button>Decline</button>

</div>

<div className="exchange-card">
  <h3>Maria Cruz</h3>

  <p>
    Wants to learn: English
  </p>

  <p>
    Offers: Graphic Design
  </p>

  <button>Accept</button>
  <button>Decline</button>

</div>


  </div>
)}
{page === "MESSAGES" && (
  <div id="userhome">

    <nav className="navbar">

      <div className="logo">LearnLoop</div>

      <ul className="nav-links">

  <li
    className={`list ${page === "USERHOME" ? "active" : ""}`}
    onClick={() => setPage("USERHOME")}
  >
    Browse
  </li>

  <li
    className={`list ${page === "MATCHES" ? "active" : ""}`}
    onClick={() => setPage("MATCHES")}
  >
    Matches
  </li>

  <li
    className={`list ${page === "EXCHANGES" ? "active" : ""}`}
    onClick={() => setPage("EXCHANGES")}
  >
    Exchanges
  </li>

  <li
    className={`list ${page === "MESSAGES" ? "active" : ""}`}
    onClick={() => setPage("MESSAGES")}
  >
    Messages
  </li>

  <li
    className={`list ${page === "PROFILE" ? "active" : ""}`}
    onClick={() => setPage("PROFILE")}
  >
    Profile
  </li>

  <li>
    <button onClick={() => setPage("login")}>
      Logout
    </button>
  </li>

</ul>
Sent
Compose
Write to


    </nav>

    <h1>💬 Messages</h1>

<div className="message-card">
  <img src="https://via.placeholder.com/60" alt="" />

  <div>
    <h3>John Doe</h3>
    <p>See you tomorrow at 7 PM!</p>
  </div>
</div>

<div className="message-card">
  <img src="https://via.placeholder.com/60" alt="" />

  <div>
    <h3>Sarah Lee</h3>
    <p>Thanks for today's lesson.</p>
  </div>
</div>
Sent
Compose
Write to


  </div>
)}
{page === "PROFILE" && (
  <div id="userhome">

    <nav className="navbar">

      <div className="logo">LearnLoop</div>

      <ul className="nav-links">

  <li
    className={`list ${page === "USERHOME" ? "active" : ""}`}
    onClick={() => setPage("USERHOME")}
  >
    Browse
  </li>

  <li
    className={`list ${page === "MATCHES" ? "active" : ""}`}
    onClick={() => setPage("MATCHES")}
  >
    Matches
  </li>

  <li
    className={`list ${page === "EXCHANGES" ? "active" : ""}`}
    onClick={() => setPage("EXCHANGES")}
  >
    Exchanges
  </li>

  <li
    className={`list ${page === "MESSAGES" ? "active" : ""}`}
    onClick={() => setPage("MESSAGES")}
  >
    Messages
  </li>

  <li
    className={`list ${page === "PROFILE" ? "active" : ""}`}
    onClick={() => setPage("PROFILE")}
  >
    Profile
  </li>

  <li>
    <button onClick={() => setPage("login")}>
      Logout
    </button>
  </li>

</ul>
Sent
Compose
Write to


    </nav>

    <h1>👤 My Profile</h1>

<div className="profile-card">

  <img src="https://via.placeholder.com/120" alt="" />

  <h2>Harold Caño</h2>

  <p>⭐ 4.9 Rating</p>

  <p><strong>Can Teach:</strong> Graphic Design</p>

  <p><strong>Want to Learn:</strong> React JS</p>

  <button>Edit Profile</button>

</div>
Sent
Compose
Write to


  </div>
)}

</>
)
}
export default App