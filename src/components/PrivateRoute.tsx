//import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  // Optionally, if you are using Route's path property or similar, add it here
  path?: string;
}


export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

  const {user} = useAuth()

  if(!user) {
    return <Navigate to="/login" />
  }

  return <>{children}</>;

}

export default PrivateRoute;
