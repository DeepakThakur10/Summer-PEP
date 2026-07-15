import { useState } from "react";
import "./Login.css";
function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    return(
        <>
            <div>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <br/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <br/>
                <br/>
                <button>Login</button>
            </div>
        </>
    )
}

export default Login;