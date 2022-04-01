import { createContext, useState } from "react";

export const AppContextProvider = (props) => {
  const [name, setName] = useState("");
  const [almaId, setAlmaId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.jwt === undefined ? false : true);
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
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

const defaultValue = {
    name: null,
    setName: () => {},
    almaId: null,
    setAlmaId: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {}
}

export const AppContext = createContext(defaultValue);

export default {}
