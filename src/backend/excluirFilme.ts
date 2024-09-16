'use server'

import RepositorioFilme from "./RepositorioFilme";


export default async function excluirFilme(id:any){
    return RepositorioFilme.excluir(id)
}