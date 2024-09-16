import excluirFilme from "./excluirFilme";
import obterTodos from "./obterTodos";
import salvarFilme from "./salvarFilme";


export default class Backend {
    static readonly filmes={
    salvar: salvarFilme,
    obter: obterTodos,
    excluir:excluirFilme,
    }
}