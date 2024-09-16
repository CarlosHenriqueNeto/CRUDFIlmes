import Model from "./img/cinema.png";
import Image from "next/image";
import Pagina from "./components/template/Pagina";
import style from "../../styles/teste.module.css";



export default function Home() {
  return (
    <Pagina>

      <Image  className={style.teste}src={Model}  alt="" />

      </Pagina>
  );
}
