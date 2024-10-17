import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../services/api";
import { getProducts } from "../../Types/types";
import Container from "../../Components/container/Container";
import DropMenu from '../../Components/menu/DropMenu'

import VCplayer from "../../Components/VCplayer/VCplayer";
import { useThemeContext } from "../../context/ThemeContext";
import { checkdarklight } from "../../Components/sideBar/SideBar";

function Product() {
  const [singleProduct, setSingleProduct] = useState<getProducts>();
  const {theme} = useThemeContext()
  const parmas = useParams<{ id: string }>();
  useEffect(() => {
    getSingleProduct(parmas.id as string).then((result) => {
      setSingleProduct(result);
    });
  }, [setSingleProduct]);
  return (
    <div>
      <Container>
        <div className="grid grid-flow-col lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-1 sm:grid-flow-row">
          <div className=" lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-3 " >
            <VCplayer/>
            <div className={`flex ${checkdarklight(theme)} my-10 justify-around`}>
              <h1 className="text-xl">{singleProduct?.Teacher_Course}</h1>
              <h2  className="text-xl">{singleProduct?.title}</h2>
              
            </div>
            <div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                dolor sapiente eaque officia earum qui, nemo dolore ipsam
                aliquam reprehenderit, delectus reiciendis quaerat veniam ipsum
                provident odio quibusdam laboriosam! Nesciunt doloremque debitis
                neque ex vero dignissimos tempore sequi. Impedit adipisci ipsam
                iusto eaque non animi quam ut ad cumque. Quas recusandae natus
                aut minus animi quod dicta reiciendis, odio, deserunt aliquam
                officiis reprehenderit eaque ex repudiandae corporis possimus
                dignissimos iusto, eius qui harum nobis voluptatum quia
                consequuntur! Ad eius nesciunt voluptatem nobis in reiciendis
                quia maxime quidem. Officia similique culpa nemo temporibus,
                voluptatem odio nostrum quo laboriosam nulla qui ad nam
                quibusdam! Eligendi, doloribus facere. Fuga, eum veniam? Est,
                inventore totam deleniti atque esse sapiente incidunt ipsum
                facilis reprehenderit accusamus? Fuga, accusamus animi.
              </p>
            </div>
          </div>
        <div className=" flex items-center lg:col-start-2 lg:col-end-2  mt-4 flex-col md:col-start-3 md:col-end-5   ">
            <DropMenu className={`lg:w-[70%] md:w-full sm:w-[40$] border-t-2 ${checkdarklight(theme)} border-black p-5 `}   Title="Topic"/>
        </div>
        

   
  
        </div>
      </Container>
    </div>
  );
}

export default Product;
