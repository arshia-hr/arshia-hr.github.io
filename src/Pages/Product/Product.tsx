import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../services/api";
import { getProducts } from "../../Types/types";
import Container from "../../Components/container/Container";
import react from "../../assets/how-to-use-svgs-react.avif";
import TSubmenu from "../../Components/T-Submenu/TSubmenu";
import DropMenu from '../../Components/menu/DropMenu'
import { useDispatch, useSelector } from "react-redux";
import { MenuSlice } from "../../redux/MenuSlice";
import { RootState } from "../../redux/store";
import VCplayer from "../../Components/VCplayer/VCplayer";

function Product() {
  const [singleProduct, setSingleProduct] = useState<getProducts>();
  const [flag,setFlag] = useState<boolean>(true)
  const dispatch = useDispatch()
  const parmas = useParams<{ id: string }>();
  useEffect(() => {
    getSingleProduct(parmas.id as string).then((result) => {
      setSingleProduct(result);
    });
  }, [setSingleProduct]);
  return (
    <div>
      <Container>
        <div className="grid grid-flow-col lg:grid-cols-2 ">
          <div  className="">
            <VCplayer/>
            <div className="flex my-10 justify-around">
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
        <div className=" flex items-center mt-4 flex-col ">
            <DropMenu className="w-[70%] border-t-2 border-black p-5 "   Title="Topic"/>
        </div>
        

   
  
        </div>
      </Container>
    </div>
  );
}

export default Product;
