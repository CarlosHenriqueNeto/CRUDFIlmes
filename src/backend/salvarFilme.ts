'use server'

import { Filme } from "@/core/model/Filme";
import RepositorioFilme from "./RepositorioFilme";
import Id from "@/core/utils/id";

export default async function salvarFilme(filme:Partial<Filme>){
    const novoFilme={
        ...filme,
        id: filme.id ?? Id.novo
    }
    RepositorioFilme.salvar(novoFilme as Filme)
}