import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Child from "./Child";

function Parent() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Parent</h2>
      <p>{user}</p>
      <Child />
    </div>
  );
}

export default Parent;