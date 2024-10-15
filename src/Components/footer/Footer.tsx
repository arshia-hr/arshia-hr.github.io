import { Telegram, WhatsApp, Instagram, Twitter } from "@mui/icons-material";
import { checkdarklight } from "../sideBar/SideBar";
import { useThemeContext } from "../../context/ThemeContext";
function Footer() {
  const { theme } = useThemeContext();
  return (
    <div
      className={
        theme
          ? " bg-white text-black grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
          : "bg-black text-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 "
      }
    >
      <div className="p-5">
        <p>
          every information users has safe and feel free to shop and enjoy the
          rounds Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores suscipit facilis laboriosam reprehenderit explicabo iure
          ducimus deleniti? Perferendis, velit! Obcaecati, vel ratione.
          Voluptates quis perspiciatis hic commodi repudiandae fuga quos.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-3">
          <Telegram fontSize="large" />
          <WhatsApp fontSize="large" />
          <Instagram fontSize="large" />
          <Twitter fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
