import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import GrandParent from "./components/GrandParent";

function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>Context API</h1>

     {/* <Login setEmail={setEmail} />
      <br></br>
      <Dashboard email={email} /> */}
      <GrandParent />
    </>
  );
}

export default App;