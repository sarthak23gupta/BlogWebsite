import React from 'react'
import isAuthenticataed from './auth'
import HomePage from '../components/HomePage'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
  return !isAuthenticataed() ? children : <Navigate to={"/home"} replace/> 
}

export default PublicRoute