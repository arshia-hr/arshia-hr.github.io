
import Container from "../../Components/container/Container";
import Slider from "../../Components/slider/Slider";
import VCplayer from "../../Components/VCplayer/VCplayer";
import Footer from "../../Components/footer/Footer";
import { checkdarklight } from "../../Components/sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";



export default function Home() {
  const {theme} = useThemeContext()
  return (
    <div className="mt-15">

      <Container>
        
        <h1 className={`text-3xl ${checkdarklight(theme)} mb-6 text-center`}>Welcome-To-Learn-React</h1>
        <p className="text-left text-gray-500 ">
          what is learn-react: learn-react is web-site for learn everything
          about react and He has made a training course for all react topics and
          covered everything and is constantly updating and does not miss
          anything Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam fugit tempore corrupti consequuntur praesentium deserunt ad
          dolores excepturi odit est ipsum, accusamus beatae earum cum? Sint
          praesentium commodi veniam provident placeat amet beatae expedita quae
          odio recusandae adipisci ducimus eligendi perferendis nisi unde
          deleniti blanditiis doloremque ipsam, illum voluptates. Omnis,
          quibusdam dolor soluta repellat animi possimus quod reprehenderit
          ratione, labore alias nihil molestias odio blanditiis tenetur vero,
          deserunt cum. Fugiat amet, animi ab praesentium doloribus dolor sequi
          mollitia ex non odit illo natus labore dicta laudantium repudiandae
          sit, velit ea consequuntur assumenda obcaecati tenetur tempore quasi
          alias ipsam. Possimus doloremque aspernatur recusandae officia
          voluptate officiis distinctio iure ea aliquid debitis, nesciunt
          consequuntur reprehenderit excepturi veritatis iusto illo! Amet
          laudantium optio placeat cum enim!
        </p>
        

        <br />
        <Slider/>
        <br />
        <br />
        <div className="text-left">
          <h2 className="text-3xl primary mb-6 ">Why Course Learn-React The best Of Course :</h2>
          <p className="text-gray-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laudantium dolores quam porro. Sint dignissimos nisi ut, beatae aperiam odio asperiores doloribus, soluta porro adipisci saepe laborum voluptatem similique itaque, iure magnam. Optio quaerat nemo aliquid perferendis autem esse iusto repellat reiciendis reprehenderit! Laudantium nostrum consequatur impedit non exercitationem eum delectus possimus minima sapiente sunt, error dolores dolor sit. Eos reiciendis velit, deserunt ipsam ducimus dolores minima unde ex voluptates sed? Cumque vero, dolorem repellendus debitis, praesentium at, natus sunt reiciendis placeat deserunt eum pariatur perferendis animi quidem maxime accusamus itaque suscipit nemo labore delectus. Dolorem facilis corporis tenetur fugiat similique reprehenderit voluptatum quod nesciunt, ipsam nihil. Fuga et quibusdam quas obcaecati reprehenderit explicabo qui blanditiis porro? Explicabo veniam aperiam consectetur ab atque!</p>
          <br/>
          <br/>
          <VCplayer/>
          <p className="text-gray-500 mt-12 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laudantium dolores quam porro. Sint dignissimos nisi ut, beatae aperiam odio asperiores doloribus, soluta porro adipisci saepe laborum voluptatem similique itaque, iure magnam. Optio quaerat nemo aliquid perferendis autem esse iusto repellat reiciendis reprehenderit! Laudantium nostrum consequatur impedit non exercitationem eum delectus possimus minima sapiente sunt, error dolores dolor sit. Eos reiciendis velit, deserunt ipsam ducimus dolores minima unde ex voluptates sed? Cumque vero, dolorem repellendus debitis, praesentium at, natus sunt reiciendis placeat deserunt eum pariatur perferendis animi quidem maxime accusamus itaque suscipit nemo labore delectus. Dolorem facilis corporis tenetur fugiat similique reprehenderit voluptatum quod nesciunt, ipsam nihil. Fuga et quibusdam quas obcaecati reprehenderit explicabo qui blanditiis porro? Explicabo veniam aperiam consectetur ab atque!</p>
        </div>
         
        
      </Container>

      <Footer/>
    </div>
  );
}
