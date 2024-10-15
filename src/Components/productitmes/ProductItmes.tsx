import react from "../../assets/how-to-use-svgs-react.avif";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useShoopingCartContext } from "../../context/ShoopingCartContext";
import { getProducts } from "../../Types/types";
import CardItmes from "../cartitmes/CardItmes";
import { checkdark } from "../sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";
type ProductItme = getProducts;
function ProductItmes({
  title,
  Price,
  Teacher_Course,
  TimeCourse,
  id,
}: ProductItme) {
  const { cartItems, handleIncreaseProudctQTY } = useShoopingCartContext();
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex   p-2 rounded flex-col ${checkdark(
        theme
      )} gap-6 text-center`}
    >
      <Link to={`/product/${id}`}>
        <div>
          <img src={react} alt="" className="rounded" />
          <h1 className="mt-3 text-xl ">{title}</h1>
        </div>
        <br />
        <div className="flex px-5 justify-between ">
          <h1>{Teacher_Course}</h1>
          <span>{TimeCourse}</span>
        </div>
      </Link>

      <div className="text-center">
        <Button
          variant="Sucsess"
          onClick={() => handleIncreaseProudctQTY(parseInt(id), Price)}
        >
          Add to Cart {Price}$ +
        </Button>
      </div>
    </div>
  );
}

export default ProductItmes;
