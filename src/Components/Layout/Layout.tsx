import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ThemeContextProvider, useThemeContext } from "../../context/ThemeContext";
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
