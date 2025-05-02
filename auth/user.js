import { randomUUID } from 'crypto';

class User{
    constructor({ id, name, email, password}){
        this.id = id ?? randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

module.exports = User;