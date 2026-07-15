import { useState } from "react";

function Signup() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");

    return (
        <>
        <div>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)} />

            <br/>
            <br/>

            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

            <br/>
            <br/>

            <input type="password" placeholder="Enter Your Password"/>

            <br/>
            <br/>
            
            

        </div>
        </>
    );
}

export default Signup;