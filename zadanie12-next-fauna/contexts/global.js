import { useState, createContext } from "react";

const INITIAL_STATE = {
  theme: 'light',
  selectedIds: []
}

export const GlobalContext = createContext(INITIAL_STATE)

export const GlobalProvider = ({ children }) => {
  const [providerState, setProviderState] = useState(INITIAL_STATE)

  const changeTheme = (theme) => {
    setProviderState({
      ...providerState,
      theme
    })
  }

  const toggleSelection = (id) => {
    console.log(`GlobalProvider: ToggleSelection called: ${id}`)
  
    
    // console.log(`Current selectedIds: ${tempSelectedIds}`)
    setProviderState({
      ...providerState,
      selectedIds: [...providerState.selectedIds, id]
    })

    // providerState.selectedIds.
    //TODO: add selection removal
    // setProviderState(providerState)
  }

  return (
    <GlobalContext.Provider value={{
      state: providerState,
      changeTheme,
      toggleSelection,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}