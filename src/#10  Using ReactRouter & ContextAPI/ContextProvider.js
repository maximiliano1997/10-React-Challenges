import {createContext, useState} from 'react';
import {nombres} from './data'
import React from "react";

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    const [name, setName] = useState({nombres})
    
    return (
        <DataContext.Provider value={name}>
            {children}
        </DataContext.Provider>
    )
}