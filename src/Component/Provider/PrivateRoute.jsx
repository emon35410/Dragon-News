import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import CircularText from '../Loading/CircularText ';

const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = use(AuthContext)
    console.log(user)
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <CircularText
                text="INTERSTELLER"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            />
        </div>

    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>

};

export default PrivateRoute;