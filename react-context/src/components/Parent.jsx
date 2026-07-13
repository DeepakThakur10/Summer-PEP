import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Child from "./Child";

function Parent() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>This is Parent</h2>
      <p>User inside parent: {user}</p>
      <Child />
    </div>
  );
}

export default Parent;