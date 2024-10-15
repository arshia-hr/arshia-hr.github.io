import { ArrowDropDown } from "@mui/icons-material";
import React, { ComponentProps, useState } from "react";
import TSubmenu from "../T-Submenu/TSubmenu";
import { useThemeContext } from "../../context/ThemeContext";
import { checkdarklight } from "../sideBar/SideBar";
type TMenu = ComponentProps<'li'> & {
    Title: string
}
function menu({Title,className,...rest} : TMenu) {
  const [flag,setFlag] = useState<boolean>(false)
  const {theme} = useThemeContext()
  const handleFlag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setFlag((flag) => flag ? false : true)
  }
  return (
    
      <li {...rest} className={`flex flex-col ${className} justify-center  `}>
        <div  onClick={(e) => handleFlag(e)} className="flex cursor-pointer  justify-between">
        <p >{Title}</p>
        <ArrowDropDown/>
        </div>
        <TSubmenu  className={`w-full  ${checkdarklight(theme)} shadow-none translate-x-[-1px]`}  flag={flag}/>
      </li>
  );
}

export default menu;
