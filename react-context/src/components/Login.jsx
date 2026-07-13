import { useState } from "react";

function Login({ email, setEmail }) {
    const[password,setPassword]=useState('');
  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) =>setPassword(e.target.value)}/>
       <button>Login</button>
    </div>
  );
}

export default Login;