import React from 'react'
import isAuthenticataed from './auth'
import Login from '../components/Login'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProtectedRoute = () => {
    return isAuthenticataed() ? (
        <>
        <Navbar/>
        {/* {children} */}
        <Outlet/>
        </>
    
    ) : <Navigate to={"/login"} replace/>;
}

export default ProtectedRoute