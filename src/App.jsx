
import { useState } from "react";
import "./App.css";

function App(){
const [username, setUsername] = useState(""); 
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
return(
<>
<h1>LEARN LOOP </h1>
<label>Name</label><br></br>
<input 
type="text"
value={username}
placeholder="Enter user yah" required
onChange={(e) => setUsername(e.target.value)
}
/>
<div>
  <input type="password"
   placeholder="mao guro"
   value={password}
   onChange={(e) => setPassword(e.target.value)
   }
   />
</div>
</>


)
}
export default App