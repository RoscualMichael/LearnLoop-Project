
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
<button onClick={handleLogin}>LOGIN</button>

 <br></br>
  <br></br>
<button onClick={() => setPage("register")}>REGISTER</button>

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
<button onClick={() => setPage("login")}>REGISTER</button>
  </div>
 )}



  
{page === "ADMINHOME" && (
  <div id="homecontainer">
    <h1>WELCOME TO ADMIN HOME PAGE</h1>

    <div className="cards">
      <div className="card">
        <h2>5</h2>
        <p>Users</p>
      </div>

      <div className="card">
        <h2>10</h2>
        <p>Listings</p>
      </div>

      <div className="card">
        <h2>3</h2>
        <p>Reports</p>
      </div>
    </div>

    <div className="buttons">
      <button>Add User</button>
      <button>View Listings</button>
      <button>Reports</button>
    </div>

    <button onClick={() => setPage("login")}>
      LOG OUT
    </button>
  </div>
)}
  

 


</>
)
}
export default App