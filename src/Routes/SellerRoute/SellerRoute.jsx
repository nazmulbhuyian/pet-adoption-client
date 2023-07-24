import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const SellerRoute = ({children}) => {
    const { user, loading, userRole } = useContext(AuthContext);

    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56 flex mx-auto lg:mt-20 lg:mb-20"></progress>
    }

    if (user && userRole == 'seller') {
        return children
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;