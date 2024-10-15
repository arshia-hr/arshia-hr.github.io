import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoopingCartContext } from "../../context/ShoopingCartContext";
import iconcart from "../../assets/icons8-cart-94.png";
import { useLogInContext } from "../../context/LogInContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { active } from "../../redux/MenuSlice";
import SideBar, { checkdark } from "../sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";
export default function Navbar() {
  const { countCart } = useShoopingCartContext();
  const { value } = useSelector((state: RootState) => state.Menu);
  const dispatch = useDispatch();
  const {theme} = useThemeContext()
  const { logIn, handleLogout } = useLogInContext();
  return (
    <>
      <Container>
        <div className={" p-3 items-center   justify-between flex text-right rounded-xl shadow-[#000] shadow-md"}>
          <div className="flex gap-4 items-center">
            <Link to="/login">
              {logIn ? (
                <button
                  onClick={handleLogout}
                  className={`p-3 ${checkdark(theme)} hover:scale-[.9] duration-[0.3s] transition-transform  rounded-xl`}
                >
                  Logout
                </button>
              ) : (
                <button className={`p-3 ${checkdark(theme)} hover:scale-[.9] duration-[0.3s] transition-transform  rounded-xl`}>
                  Login
                </button>
              )}
            </Link>
            <button className="p-3 hover:scale-[.9] duration-[0.3s] transition-transform ">
              <Link to="/cart">
                {countCart !== 0 ? (
                  <div className="flex relative">
                    <img className="h-10 w-10" src={iconcart} alt="" />
                    <span className="w-6 h-6 right-[-10px] top 0 flex items-center justify-center text-white rounded-xl absolute transition-all  bg-[#f94911]">
                      {countCart}
                    </span>
                  </div>
                ) : (
                  <div className="flex relative">
                    <img className="h-10 w-10" src={iconcart} alt="" />
                    <span className="w-6 h-6 right-[-10px] top 0 flex items-center justify-center text-white  rounded-xl absolute  bg-[#f94911]">
                      0
                    </span>
                  </div>
                )}
              </Link>
            </button>
          </div>
          <ul className="flex items-center gap-4">
            <li className={`p-3 ${checkdark(theme)} lg:flex md:hidden sm:hidden flex hover:scale-[.9] duration-[0.3s] transition-transform  rounded-xl`}>
              <Link to={"/store"}>Shop</Link>
            </li>
            <li className={`p-3 ${checkdark(theme)} lg:flex md:hidden sm:hidden flex hover:scale-[.9] duration-[0.3s] transition-transform  rounded-xl`}>
              <Link to={"/"}>Home</Link>
            </li>

            <li
              onClick={() => dispatch(active())}
              className="flex p-3  overflow-hidden cursor-pointer flex-col lg:hidden gap-1"
            >
              {!value ? (
                <>
                  <span className="w-6 transition-all  rotate-[0deg] bg-[#524d4d] h-1"></span>
                  <span className="w-6 bg-[#524d4d]  transition-all block translate-x-[0px] h-1"></span>
                  <span className="w-6 transition-all rotate-[0deg] bg-[#524d4d] h-1"></span>
                </>
              ) : (
                <>
                  <span className="w-7 transition-all translate-y-3  rotate-[-60deg] bg-[#524d4d] h-2"></span>
                  <span className=" transition-all hidden bg-[#524d4d] translate-x-[25px] "></span>
                  <span className="w-7 transition-all rotate-[60deg] bg-[#524d4d] h-2"></span>
                </>
              )}
            </li>
          </ul>
        </div>
      </Container>
       <SideBar /> 
    </>
  );
}
