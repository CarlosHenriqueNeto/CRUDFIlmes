import Model from "./img/cinema.png";
import Image from "next/image";
import Pagina from "./components/template/Pagina";



export default function Home() {
  return (
    <Pagina><Image src={Model}  width={750} alt="" /></Pagina>
  );
}
