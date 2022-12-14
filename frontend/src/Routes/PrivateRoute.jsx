import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
    const { token } = useSelector(store => store.auth)

    if (token !== '') {
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
}