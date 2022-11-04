import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
    const { token } = useSelector(store => store.auth)

    // feedback: fw18_0042 - You can optimise this code, if (token) return children will also work
    if (token !== '') {
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
}
