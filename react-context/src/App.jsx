// import { useState } from "react";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import ContextProvider from "./context/UserContext";
// import GrandParent from "./components/GrandParent";

// function App() {
//   const [email, setEmail] = useState("");
//   use

//   return (
//     <>
    
//       <h1>Context API</h1>

//      {/* <Login setEmail={setEmail} />
//       <br></br>
//       <Dashboard email={email} /> */}
      
//       <GrandParent />
      
//     </>
//   );
// }

// export default App;

import GrandParent from "./components/GrandParent";

function App() {
  return (
    <>
      <h1>Context API</h1>
      <GrandParent />
    </>
  );
}

export default App;