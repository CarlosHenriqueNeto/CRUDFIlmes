import { Filme } from "@/core/model/Filme"

export interface LinhaFilmeProps{
    filme:Filme
}


export default function LinhaFilme(props: LinhaFilmeProps){
    return(
        <div className="flex bg-zinc-900 p-4 rounded-md">
            <div className="flex flex-col">
            <span>{props.filme.titulo}</span>
            <span className="text-sn text-zinc-400">{props.filme.genero}</span>
            <span className="text-sn text-zinc-400">{props.filme.diretor}</span>
            <span className="text-sn text-zinc-400">{props.filme.ano}</span>
            <span className="text-sn text-zinc-400">{props.filme.lancamento}</span>

            </div>
          
        </div>
    )
}