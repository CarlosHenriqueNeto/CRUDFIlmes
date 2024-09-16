import { Filme } from "@/core/model/Filme"

export interface LinhaFilmeProps{
    filme:Filme
    onClick?: (filme: Filme) => void
}


export default function LinhaFilme(props: LinhaFilmeProps){
    return(
        <div className="flex bg-zinc-900 p-4 rounded-md cursor-pointer" onClick={()=> props.onClick?.(props.filme)}>
            <div className="flex flex-col">

            <span className="font-black ">Titulo</span>
            <span className="text-sn text-zinc-400">{props.filme.titulo}</span>

            <span className="font-black">Genero</span>
            <span className="text-sn text-zinc-400">{props.filme.genero}</span>
            <span className="font-black">Diretor</span>
            <span className="text-sn text-zinc-400">{props.filme.diretor}</span>
            <span className="font-black">Ano</span>
            <span className="text-sn text-zinc-400">{props.filme.ano}</span>
            <span className="font-black">Lançamento</span>
            <span className="text-sn text-zinc-400">{props.filme.lancamento}</span>

            </div>
          
        </div>
    )
}