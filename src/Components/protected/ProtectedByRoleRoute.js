import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {AuthenticationContext} from "../../Context/Context";

function ProtectedByRoleRoute ({children,role}) {
  const [authState, setAuthState] = useContext(AuthenticationContext);
  const roles=authState.roles;
  if(roles.includes(role)) {
    return children;
  } else {
    return (<Navigate to={"/notAuthorized"}></Navigate>);
  }
}

export default ProtectedByRoleRoute