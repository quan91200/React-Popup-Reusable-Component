import React, { createContext, useContext } from 'react'

const PopupContext = createContext()

export const usePopupContext = () => useContext(PopupContext)

export const PopupProvider = ({ children, config }) => {
    return (
        <PopupContext.Provider value={config}>
            {children}
        </PopupContext.Provider>
    )
}

