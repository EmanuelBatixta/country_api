import { sql } from './db.js'

export class DataBasePostgres{
    async list(search){
        let country

        search ? country = await sql`select * from paises where nome ilike ${"%" + search + "%"}`: country = await sql`select * from paises`

        return country;
    }

    async create(country){
        const { id, nome, capital, populacao, idioma, area } = country

        await sql`insert into paises (id, nome, capital, populacao, idioma, area) values (${id}, ${nome}, ${capital}, ${populacao}, ${idioma}, ${area})`
    }

    async update(id, country){
        const { nome, capital, populacao, idioma, area } = country;

        await sql`UPDATE paises SET nome = ${nome}, capital = ${capital}, populacao = ${populacao}, idioma = ${idioma}, area = ${area} WHERE id = ${id}`
    }

    async delete(){
        await sql`delete from paises where id = ${id}`
    }
}