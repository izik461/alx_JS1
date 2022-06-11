import { useState, createContext } from "react";

const INITIAL_STATE = {
  theme: 'light'
}

export const GlobalContext = createContext(INITIAL_STATE)

export const GlobalProvider = ({ children }) => {
  const [providerState, setProviderState] = useState(INITIAL_STATE)

  const changeTheme = () => {
    console.log('Change theme')
  }

  return (
    <GlobalContext.Provider value={{
      state: providerState,
      changeTheme
    }}>
      {children}
    </GlobalContext.Provider>
  )
}