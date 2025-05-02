import { User } from './user.js'
import { bcrypt } from 'bcrypt';
import { jwt } from 'jsonwebtoken';

class AuthService{
    constructor(repository){
        this.repository = repository;
    }

    register(nome, email, password){
        const userExist = this.reposibtory.findByEmail(email);
        if (userExist) throw new Error("Email ja cadastrado!");

        const newUser = new User({ nome, email, password });
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        this.repository.save(newUser);
        return newUser
    }

    login(email, password){
        const user = this.repository.findByEmail(email);
        if(!user) throw new Error("Email ou senha incorretos!");

        const isSamePassword = bcrypt.compareSync(password, user.password);
        if(!isSamePassword) throw new Error("Email ou senha incorretos!");

        const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1d'});

        return {token, user}
    }
}