import { createContext, useState } from "react";

const defaultValue = {
  name: null,
  setName: () => {},
  email: null,
  setEmail: () => {},
  almaId: null,
  setAlmaId: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {}
}

export const AppContext = createContext(defaultValue);

export const AppContextProvider = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [almaId, setAlmaId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.jwt === undefined ? false : true);
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        almaId,
        setAlmaId,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default {}
