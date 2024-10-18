import Container from "../../Components/container/Container";
import CardItmes from "../../Components/cartitmes/CardItmes";
import Button from "../../Components/button/Button";
import { useShoopingCartContext } from "../../context/ShoopingCartContext";
import cartempty from '../../assets/1942838.png'
import { checkdarklight } from "../../Components/sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";

export default function cart() {
  const { cartItems, Price, discount,countCart } = useShoopingCartContext();
  const { theme } = useThemeContext();
  return (
   
      
       <Container  className="min-h-screen ">
        {countCart === 0 ? (
          <div className="text-center">
            <img src={cartempty} alt="" className="w-[40%] m-auto" />
          </div>
        ):(    <><div className="grid grid-flow-row gap-10 row-auto lg:grid-cols-1  md:grid-cols-4 sm:grid-cols-1 ">
          {cartItems.map((items) => (
            <CardItmes key={items.id} {...items} />
          ))}
      



          
        </div>
        <div className="flex mt-5 lg:text-2xl md:text-2xl sm:text-3xl w-full border-t-2  border-gray-700 justify-between items-center">
          <div className={`flex ${checkdarklight(theme)} flex-col mt-10`}>
            <h1 className="">Price: {Price}$ </h1>
            <span className="text-[#da3b04]  line-through">
              discount: 5%
            </span>
            <h1 className="">Final Price: {discount}$</h1>
          </div>
          <div>
            <Button className="w-[100%] px-5" variant="Sucsess">
              Pay
            </Button>
          </div>
        </div></>    )}

       </Container>

   

     
  
  );
}
