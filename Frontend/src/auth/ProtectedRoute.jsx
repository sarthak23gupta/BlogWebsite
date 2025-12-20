import React from 'react'
import isAuthenticataed from './auth'
import Login from '../components/Login'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    return isAuthenticataed() ? children : <Navigate to={"/login"} replace/>;
}

export default ProtectedRoute