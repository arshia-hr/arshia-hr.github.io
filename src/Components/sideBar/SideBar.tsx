import { Avatar, Button, FormControlLabel, Switch } from "@mui/material";
import ProfileC from "../../assets/IMG_20240612_000857_212.jpg";
import { ArrowBack} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Dropmenu from "../menu/DropMenu";
import { deactive } from "../../redux/MenuSlice";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { useLogInContext } from "../../context/LogInContext";
import { useThemeContext } from "../../context/ThemeContext";
function SideBar() {
  const { value } = useSelector((state: RootState) => state.Menu);
  
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));
  const { theme, handleTheme } = useThemeContext();
  const { logIn, handleLogout } = useLogInContext();

  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={`  fixed z-[100] transition-all ${checkdark(theme)}  ${
          value ? "right-0" : "right-[-30%]"
        }  shadow-xl shadow-black h-full     w-[30%]  top-0 `}
      >
        <ArrowBack
          onClick={() => dispatch(deactive())}
          className="absolute w-[50px] cursor-pointer left-2 top-2"
        />
        <ul className="p-3 flex gap-4   flex-col">
          <li className="border-b-2 h-[100px] gap-2 justify-end flex items-center border-[#000] ">
            <div className="flex flex-col items-center">
              <p className="text-1xl">arshia-hagh</p>
              <span className="text-[#7ae057]">Online</span>
            </div>
            <Avatar
              sx={{
                width: "50px",
                border: "2px solid #7ae057",
                height: "50px",
              }}
              variant="circular"
              alt="Profile"
              src={ProfileC}
            />
          </li>
          <li className="border-b-2 h-[100px] gap-2 flex flex-col items-center border-[#000] ">
            <Link to="/" className="w-full text-center">
              <Button
                sx={
                  theme
                    ? { width: "100%", background: "black", color: "white" }
                    : { width: "100%", background: "white" }
                }
                color="inherit"
                variant="contained"
              >
                Home
              </Button>
            </Link>
            <Link to="/store" className="w-full text-center">
              <Button
                sx={
                  theme
                    ? { width: "100%", background: "black", color: "white" }
                    : { width: "100%", background: "white" }
                }
                color="inherit"
                variant="contained"
              >
                Shope
              </Button>
            </Link>
          </li>
          <Dropmenu Title="React-Basic" />
          <Dropmenu Title="React-Hooks" />
          <Dropmenu Title="Reat-Advanced" />
          <Dropmenu Title="React-Query" />
          <li className="flex items-center py-4  border-t-2 border-[#000] justify-around">
            <Link to="/login">
              {logIn ? (
                <Button
                  className="w-full text-nowrap bg-transparent "
                  onClick={() => handleLogout()}
                  sx={
                    theme
                      ? { width: "100%", background: "black", color: "white" }
                      : { width: "100%", background: "white" }
                  }
                  color="inherit"
                  variant="contained"
                >
                  Log Out
                </Button>
              ) : (
                <Button
                  onClick={() => handleLogout()}
                  sx={
                    theme
                      ? { width: "100%", background: "black", color: "white" }
                      : { width: "100%", background: "white" }
                  }
                  color="inherit"
                  variant="contained"
                >
                  Login
                </Button>
              )}
            </Link>
           

            <FormControlLabel 
              control={<MaterialUISwitch  sx={{ m: 1 }} />}
              label=""
              onClick={() => handleTheme()}
              checked={theme}
            />
           
          </li>
        </ul>
      </div>
    </div>
  );
}
export function checkdark(theme: boolean) {
  if (theme) {
    return "bg-secondery text-primery";
  } else {
    return "bg-primery text-primery";
  }
}
export function checkdarklight(theme: boolean) {
  if (theme) {
    return "bg-black text-white";
  } else {
    return "bg-white text-black";
  }
}
export default SideBar;
