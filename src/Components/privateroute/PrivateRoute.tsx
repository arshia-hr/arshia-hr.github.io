import React from "react";
import { useLogInContext } from "../../context/LogInContext";
import LogIn from "../../Pages/login/LogIn";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const   {logIn} = useLogInContext()
  return <>
  {logIn ? <Outlet/> : <Navigate to={'/login'}/>}
  </>;
}

export default PrivateRoute;
