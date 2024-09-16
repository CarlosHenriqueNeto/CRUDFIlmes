'use client'
import FormularioFilme from "@/app/components/filme/FormularioFIlme";
import ListaFilme from "@/app/components/filme/ListaFilme";
import Pagina from "@/app/components/template/Pagina";
import filmes from "@/app/data/constants/Filmes";
import Backend from "@/backend";
import { Filme } from "@/core/model/Filme";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";


export default function Page() {
    const [filmes, setFilmes] = useState<Filme[]>([])
    const [filme, setFilme] = useState<Partial<Filme> | null>(null)

    useEffect(() => {
        Backend.filmes.obter().then(setFilmes)
    },[])

    async function salvar() {
        if (!filme) return
        await Backend.filmes.salvar(filme)
        const filmes = await Backend.filmes.obter()
        setFilmes(filmes)
        setFilme(null)
    }
    async function excluir() {
        if (!filme || !filme.id) return
        await Backend.filmes.excluir(filme.id!)
        const filmes = await Backend.filmes.obter()
        setFilmes(filmes)
        setFilme(null)
    }

    return (
        <Pagina>
           

            {filme ? (
                <FormularioFilme 
                filme={filme} 
                onChange={setFilme}
                salvar={salvar}
                cancelar={() => setFilme(null)}
                excluir={excluir}
                 />
            ) : (
                <>
                 <div className="flex justify-end">
                <button className="flex items-center bg-blue-500 px-4 py-2 rounded-md gap-2" onClick={() => setFilme({})}>
                    <IconPlus />
                    <span>Cadastrar Filme</span>
                    Cadastrar
                </button>
            </div>
                <ListaFilme filmes= {filmes} onClick={setFilme}/>
                </>
            )}
        </Pagina>

    )

}