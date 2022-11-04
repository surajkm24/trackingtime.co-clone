import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
let initToken = localStorage.getItem('trackTimeToken') || "";

// Context for providing authentication
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(initToken);

    console.log(token)
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
