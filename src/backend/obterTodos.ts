'use server'
import RepositorioFilme from "./RepositorioFilme";

export default async function obterTodos(){
    return  RepositorioFilme.obterTodos()
}