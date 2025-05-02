import { sql } from '../db.js' 
import { User } from './user.js'

class UserDB{
    constructor(){
        this.users = sql`SELECT * FROM usuarios`
    }

    save(user){
        const { id, name, email, password } = user;
        sql`INSERT INTO usuarios (id, nome, email, senha) VALUES
        (${id}, ${name}, ${email}, ${password})`;
    }

    findByEmail(email){

        return sql`SELECT * FROM usuarios WHERE email = ${email}`
    }        
}