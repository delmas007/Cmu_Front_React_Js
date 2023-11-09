import React, {useContext, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import {AuthenticationContext} from "../../Context/Context";

function ProtectedRoute ({ children }) {
  const [authState]= useContext(AuthenticationContext);
  useEffect(()=>{
    console.log(authState)
  })
  if(authState.isAuthenticated){
    return  children;
  } else {
    //return (<Navigate to={"/login"}></Navigate>);
    return  children;
  }
}

export default ProtectedRoute