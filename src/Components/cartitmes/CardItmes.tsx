import { useEffect, useState } from "react";
import react from "../../assets/how-to-use-svgs-react.avif";
import Button from "../button/Button";

import { useShoopingCartContext } from "../../context/ShoopingCartContext";
import { Root2 } from "../../Types/types";
import { getSingleProduct } from "../../services/api";
import { checkdark } from "../sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";
type Cart = TCart
interface TCart {
  id: number | string,
  qty: number
}
function CardItmes({id} : Cart) {
  const {handleRemoveProduct} = useShoopingCartContext()
  const [title,setTitle] = useState<Root2>()
  const {theme} = useThemeContext()
  useEffect(() => {
    getSingleProduct(id as string).then(result =>{
      setTitle(result)
    })
  },[setTitle])

  return (
    <div className=" flex justify-center">
      <div className={` w-[300px] gap-5 p-2 flex flex-col ${checkdark(theme)} text-center  rounded     roundend`}>
        <img src={react} className='rounded' alt="" />
        <div className="flex gap-4 flex-col">
          <p>{title?.title}</p>
          <div className="flex w-full p-5  ">
            <div className="w-full">
              <Button className="w-[60%]" onClick={() => handleRemoveProduct(id as number)} variant="Failed">Remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItmes;
