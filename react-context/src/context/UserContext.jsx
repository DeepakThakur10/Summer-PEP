import { createContext, useState } from "react";

export const UserContext = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState("Jerry");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;