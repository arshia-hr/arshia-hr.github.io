import React, { ComponentProps } from "react";
import styled from "./TsSubmenu.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useThemeContext } from "../../context/ThemeContext";
type TButton = ComponentProps<'ul'>  & {
  flag: boolean
}
function TSubmenu({ flag,className, ...rest }: TButton) {
  const {theme} = useThemeContext()
  return (

      <ul {...rest} className={` w-[80%] mt-1   ${className} overflow-auto p-5  scrollbar transition-all duration-[0.5s]  ${checkSubMenu(
        flag
      )}   shadow-xl shadow-gray-700 rounded bg-[#f0e0db]`}>
        <li className={ theme ? `flex my-3  justify-between items-center border-b-2 border-[#fff] ` : `flex my-3  justify-between items-center border-b-2 border-[#000] `}>
          <a className="text-left" href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            et consequuntur aliquam praesentium soluta temporibus tenetur
            dignissimos dolore quis quisquam, ab esse atque rerum culpa vero
            quasi laudantium iste expedita.
          </a>
          <a href="#">1</a>
        </li>
        <li className={ theme ? `flex my-3  justify-between items-center border-b-2 border-[#fff] ` : `flex my-3  justify-between items-center border-b-2 border-[#000] `}>
          <a className="text-left" href="#">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            unde aut voluptatibus consequatur accusamus, pariatur quam a maiores
            quasi aliquam, tempora at cupiditate odit, ullam ut reiciendis
            impedit enim totam praesent
          </a>
          <a href="#">2</a>
        </li>
        <li className={ theme ? `flex my-3  justify-between items-center border-b-2 border-[#fff] ` : `flex my-3  justify-between items-center border-b-2 border-[#000] `}>
          <a className="text-left" href="#">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            unde aut voluptatibus consequatur accusamus, pariatur quam a maiores
            quasi aliquam, tempora at cupiditate odit, ullam ut reiciendis
            impedit enim totam praesent
          </a>
          <a href="#">2</a>
        </li>
        <li className={ theme ? `flex my-3  justify-between items-center border-b-2 border-[#fff] ` : `flex my-3  justify-between items-center border-b-2 border-[#000] `}>
          <a className="text-left" href="#">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            unde aut voluptatibus consequatur accusamus, pariatur quam a maiores
            quasi aliquam, tempora at cupiditate odit, ullam ut reiciendis
            impedit enim totam praesent
          </a>
          <a href="#">2</a>
        </li>
      </ul>
  
  );
}
function checkSubMenu(flag: boolean) {
  if (flag) {
    return "max-h-[200px] opacity-[1]";
  } else {
    return "max-h-[0px] opacity-[0]";
  }
}

export default TSubmenu;
