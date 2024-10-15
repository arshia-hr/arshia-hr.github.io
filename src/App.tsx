import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Layout from "./Components/Layout/Layout";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/cart/Cart";
import { useLogInContext } from "./context/LogInContext";
import PrivateRoute from "./Components/privateroute/PrivateRoute";
import LogIn from "./Pages/login/LogIn";
import NotFind from "./Pages/notfound/NotFound";

export default function App() {
  const { logIn } = useLogInContext();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/login"
          element={logIn ? <Navigate to="/" /> : <LogIn/> }
        />
        <Route element={<PrivateRoute/>}>
          <Route path="/cart" element={<Cart/>}/>
        </Route>
        <Route path="*" element={<NotFind/>}/>
      </Routes>
    </Layout>
  );
}
