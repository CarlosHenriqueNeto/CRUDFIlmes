

import { Filme } from "@/core/model/Filme"
import { PrismaClient } from "@prisma/client"

export default class RepositorioFilme{
    private static db: PrismaClient = new PrismaClient()

    static async obterTodos(): Promise<Filme[]>{
        return await this.db.catalogo.findMany()
    }

    static async obterPorId(id:any ): Promise<Filme>{
        const filme = await this.db.catalogo.findUnique({where:{id}})
        return filme as Filme
    }
    static async salvar(catalogo:Filme): Promise <Filme> {
        return await this.db.catalogo.upsert({
            where:{id: catalogo.id},
            update:catalogo,
            create:catalogo,
        })
    }
    static async excluir(id: any):Promise<void>{
        await this.db.catalogo.delete({
            where:{id},
        })
    }


}