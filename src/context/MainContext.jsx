import { createContext } from "react";

export const MainContext = createContext();

function MainContextProvider({ children }) {
  return (
    <MainContext.Provider value={"fayzullo alisherov"}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
