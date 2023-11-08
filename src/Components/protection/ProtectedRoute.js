import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {AuthenticationContext} from "../../Context/Context";

function ProtectedRoute ({ children }) {
  const [authState]= useContext(AuthenticationContext);
  if(authState.isAuthenticated){
    return  children;
  } else {
    return (<Navigate to={"/login"}></Navigate>);
  }
}

export default ProtectedRoute