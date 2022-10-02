import { useContext } from "react";
import { AuthContext } from '../Pages/ContextAPI/AuthContext.jsx'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (token !== '') {
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
}