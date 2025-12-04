import { Injectable } from "@nestjs/common";
import { Injector } from "@nestjs/core/injector/injector";
import { InjectRepository } from "@nestjs/typeorm";
import { IuserRepository } from "src/User/Repository/users-repository.interface";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "src/User/DTO/create.user.dto";
import { User } from "src/User/Model/user.model";
import { UserMapper } from "../Mappers/user.mapper";

@Injectable()
export class UsersTypeOrmRepository implements IuserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly typeormRepo: Repository<UserEntity>,  
    ){}

    async create (data: CreateUserDto): Promise<User>{

        const schema = this.typeormRepo.create(data)

        const savedSchema = await this.typeormRepo.save(schema)

        return UserMapper.toDomain(savedSchema)
    }
}