import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [address, setAddress] = useState("");

  return (
    <AuthContext.Provider value={{ address, setAddress }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
