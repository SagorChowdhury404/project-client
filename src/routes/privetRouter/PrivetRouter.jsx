import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <div><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span></div>;
    }
    if (user) {
        return children;
    }

    return <Navigate to='/LoginPages' state={location?.pathname}  ></Navigate>
};

export default PrivetRouter;