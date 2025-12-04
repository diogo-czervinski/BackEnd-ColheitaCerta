import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./TypeOrm/entities/user.entity";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./Use-Cases/createUser.user-case";
import { IuserRepository } from "./Repository/users-repository.interface";
import { UsersTypeOrmRepository } from "./TypeOrm/Repository/users.typeorm.repository";
import { IHashProvider } from "./Providers/hash-provider.interface";
import { BcryptHashProvider } from "./Providers/bcrypt-hash.provider";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [
        CreateUserUseCase,
        {
            provide: IuserRepository,
            useClass: UsersTypeOrmRepository,
        },
        {
            provide: IHashProvider,
            useClass: BcryptHashProvider,
        }
    ],
    controllers: [UserController]
})
export class UserModule{}