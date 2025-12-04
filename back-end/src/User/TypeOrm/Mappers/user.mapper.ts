import { User } from "src/User/Model/user.model";
import { UserEntity } from "../entities/user.entity";

export class UserMapper{
    static toDomain (schema: UserEntity): User{
        return new User({
            id: schema.id,
            name: schema.name,
            email: schema.email,
            pass: schema.pass,
            tel: schema.tel
        })
    }

    static toSchema (user: User): UserEntity{
        const schema = new UserEntity();

        if(user.id) schema.id = user.id;
        schema.name = user.name;
        schema.email = user.email;
        schema.pass = user.pass;
        schema.tel = user.tel;

        return schema;
    }
}