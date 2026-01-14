import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || !user.isAdmin) {
    // redirect to login keeping the desired location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
