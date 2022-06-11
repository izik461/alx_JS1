import { createContext } from "react";

const INITIAL_STATE = {
  theme: 'light'
}

export const GlobalContext = createContext(INITIAL_STATE)

export const GlobalProvider = ({ children }) => (
  <GlobalContext.Provider value={INITIAL_STATE}>
    {children}
  </GlobalContext.Provider>
)