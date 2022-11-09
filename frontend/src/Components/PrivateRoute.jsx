import { useContext } from "react";
import { AuthContext } from '../Pages/ContextAPI/AuthContext.jsx'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { token } = useContext(AuthContext);
    // feedback: fw18_0042 - you can do something like this: if (token) return children
    if (token !== '') {
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
}
