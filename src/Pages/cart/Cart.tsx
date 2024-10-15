import Container from "../../Components/container/Container";
import CardItmes from "../../Components/cartitmes/CardItmes";
import Button from "../../Components/button/Button";
import { useShoopingCartContext } from "../../context/ShoopingCartContext";

import { checkdarklight } from "../../Components/sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";

export default function cart() {
  const {cartItems,Price,discount} = useShoopingCartContext()
  const {theme} = useThemeContext()
  return (
    <div className="h-screen">
      <Container>
        
        <div className="grid gap-10 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  ">
          {cartItems.map(items => (
            <CardItmes key={items.id} {...items} />
          ))}
          <CardItmes id={2} qty={2} />
        </div>
        <div className="flex mt-5 border-t-2 border-gray-700 justify-between items-center">
          <div className={`flex ${checkdarklight(theme)} flex-col mt-10`}>
          <h1 className="text-3xl">Price: {Price}$ </h1>
          <span className="text-[#da3b04] text-2xl line-through">discount: 5%</span>
          <h1 className="text-3xl">Final Price: {discount}$</h1>
          </div>
          <div>
          <Button className="w-[100%] px-5" variant="Sucsess">
            Pay
          </Button>
        </div>
        </div>
        
        

      </Container>
    </div>
  );
}
