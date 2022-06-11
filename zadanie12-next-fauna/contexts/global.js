import { useState, useEffect, createContext } from "react";

const INITIAL_STATE = {
  theme: 'light',
  selectedIds: []
}

export const GlobalContext = createContext(INITIAL_STATE)

export const GlobalProvider = ({ children }) => {
  const [providerState, setProviderState] = useState(INITIAL_STATE)

  useEffect(() => {
    const selectedIdsInLS = JSON.parse(localStorage.getItem('selectedIds') ?? null)

    if(selectedIdsInLS) {
      setProviderState({
      ...providerState,
      selectedIds: selectedIdsInLS
       })
    }
  }, [])

  const changeTheme = (theme) => {
    setProviderState({
      ...providerState,
      theme
    })
  }

  const toggleSelection = (id) => {
    console.log(`GlobalProvider: ToggleSelection called: ${id}`)
    const isSelected = providerState.selectedIds.find(element => element === id)
    
    const newSelectedArray = isSelected
      ? providerState.selectedIds.filter(elem => elem !== id)
      : [...providerState.selectedIds, id]

  setProviderState({
    ...providerState,
    selectedIds: newSelectedArray
  })

  localStorage.setItem('selectedIds', JSON.stringify(newSelectedArray))
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