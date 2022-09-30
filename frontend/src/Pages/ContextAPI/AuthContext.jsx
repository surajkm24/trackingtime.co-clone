import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
const [token,setToken] = useState("");

console.log(token)
  return (
    <AuthContext.Provider value={{token, setToken}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
