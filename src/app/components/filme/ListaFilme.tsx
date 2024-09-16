
import LinhaFilme from "./LinhaFIlme";
import { Filme } from "@/core/model/Filme";

export interface ListaFilmeProps{
    filmes: Filme[]
    onClick?: (filme: Filme) => void

}

export default function ListaFilme(props: ListaFilmeProps){
    return(
        <div className="flex flex-col gap-4">
            {props.filmes.map((filme: Filme) => {
            return <LinhaFilme key={filme.id} filme={filme} onClick={props.onClick}/>
        })}
        
        </div>
    )
}