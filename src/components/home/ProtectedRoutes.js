import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return token == "" ? <Navigate to="/login" /> : <Outlet />;

}

export default ProtectedRoutes;