import filmes from "@/app/data/constants/Filmes";
import LinhaFilme from "./LinhaFIlme";
import { Filme } from "@/core/model/Filme";


export default function ListaFilme(){
    return(
        <div className="flex flex-col gap-4">
            {filmes.map((filme: Filme) => {
            return <LinhaFilme key={filme.id} filme={filme} />
        })}
        
        </div>
    )
}