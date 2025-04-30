import { fastify } from 'fastify';
import { DataBasePostgres } from './db-postgres.js';

const server = fastify()

const database = new DataBasePostgres()

server.get('/', async (request) => {
    
    return 'author: Emanuel Oliveira, Github: emanuelbatixta'
})

server.get('/paises', async (request) => {
    const search = request.query.search

    const paises = await database.list(search)

    return paises
})

server.post('/paises', async (request, reply) => {
    const { id, nome, capital, populacao, idioma, area} = request.body

    await database.create({
        id,
        nome,
        capital,
        populacao,
        idioma,
        area,        
    })

    return reply.status(201).send()
})

server.put('/paises/:id', async (request, reply) => {
    const countryId = request.params.id

    const { id, nome, capital, populacao, idioma, area} = request.body

    await database.update(countryId,{
        id,
        nome,
        capital,
        populacao,
        idioma,
        area,   
    })

    return reply.status(204).send()
})

server.delete('/paises/:id', (request, reply) => {
    const countryId = request.params.id
    database.delete(countryId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})