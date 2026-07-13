import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function GrandChild() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");

  return (
    <div>
      <h2>This is GrandChild Component</h2>
      <p>{user}</p>

      <input
        type="text"
        placeholder="Enter name for updation"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setUser(name)}>
        Change User
      </button>
    </div>
  );
}

export default GrandChild;