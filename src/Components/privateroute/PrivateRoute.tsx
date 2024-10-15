import { useLogInContext } from "../../context/LogInContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const   {logIn} = useLogInContext()
  return <>
  {logIn ? <Outlet/> : <Navigate to={'/login'}/>}
  </>;
}

export default PrivateRoute;
