import React, { useState } from "react";
import { useLogInContext } from "../../context/LogInContext";
import Container from "../../Components/container/Container";
import Button from "../../Components/button/Button";
import Input  from "../../Components/input/Input";
import { checkdark } from "../../Components/sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";

function LogIn() {
    const [infoUser,setInfoUser] = useState({
        Username: '',
        Password: ''
    })
  const { handleLogin } = useLogInContext();
  const {theme} = useThemeContext()
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target
    setInfoUser({
        ...infoUser,
        [name]: value
    })
   
  }
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Container>
        <div className={` lg:w-[400px] md:w-[400px] sm:w-[95%]  ${checkdark(theme)} translate-y-[-80px] m-auto h-[370px]  gap-9 flex flex-col  items-center justify-center  rounded-lg shadow-lg shadow-[#000]`}>

          <Input  name="Username" value={infoUser.Username} handle={(e : React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
          <Input name="Password" value={infoUser.Password} handle={(e : React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
          <Button className="w-[70%]" variant="Sucsess" onClick={() => handleLogin(infoUser.Username,infoUser.Password)}>Login</Button>
        
        </div>
      </Container>
    </div >
  );
}

export default LogIn;
