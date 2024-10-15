import React from "react";
import Navbar from "../Navbar/Navbar";
import {  useThemeContext } from "../../context/ThemeContext";
interface TLayout {
  children: React.ReactNode;
}
export default function Layout({ children }: TLayout) {
  const {theme} = useThemeContext()
  return (
    <div className={theme ? 'bg-black' : 'bg-white'}>
      <Navbar />
      {children}
      
    </div>
  );
}
