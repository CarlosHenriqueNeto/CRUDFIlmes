import { Filme } from "@/core/model/Filme";
import InputTexto from "../shared/InputTexto";

export interface FormularioUsuarioProps{
filme: Partial<Filme>
onChange: (filme:Partial<Filme>) => void
salvar:() => void
cancelar:() => void
excluir:() => void
}

export default function FormularioFilme(props: FormularioUsuarioProps){
return(
    <div className="flex flex-col gap-5">
        <InputTexto label="nome" value={props.filme.titulo} 
        onChange={ e => props.onChange?.({...props.filme, titulo: e.target.value})} />

        <InputTexto label="genero" value={props.filme.genero}
        onChange={ e => props.onChange?.({...props.filme, genero: e.target.value})} />

        <InputTexto label="diretor" value={props.filme.diretor} 
        onChange={ e => props.onChange?.({...props.filme, diretor: e.target.value})} />

        <InputTexto label="ano" value={props.filme.ano} 
        onChange={ e => props.onChange?.({...props.filme, ano: e.target.value})} />

        <InputTexto label="lancamento" value={props.filme.lancamento}
        onChange={ e => props.onChange?.({...props.filme, lancamento: e.target.value})} />

<div className="flex justify-between">
    <div className="flex gap-5">
        <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancelar}>Cancelar</button>
        <button className="bg-green-500 px-4 py-2 rounded-md" onClick={props.salvar}>Salvar</button>
    </div>
        <button className="bg-red-500 px-4 py-2 rounded-md" onClick={props.excluir}>Excluir</button>
</div>
    </div>

)
}