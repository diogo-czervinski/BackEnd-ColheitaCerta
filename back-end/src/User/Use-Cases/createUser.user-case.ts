import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { IuserRepository } from "../Repository/users-repository.interface";
import { IHashProvider } from "../Providers/hash-provider.interface";
import { CreateUserDto } from "../DTO/create.user.dto";
import { User } from "../Model/user.model";

@Injectable()
export class CreateUserUseCase{

    constructor(
        private readonly usersRepository: IuserRepository,
        private readonly hashProvider: IHashProvider
    ){}

    async execute (data: CreateUserDto) {
        try{
            const hashedPass = await this.hashProvider.hash(data.pass)

            const newUser = new User ({
                name: data.name,
                email: data.email,
                pass: hashedPass,
                tell: data.tell
            });

            return await this.usersRepository.create(newUser);
        }catch (error){
            
            console.error("Erro ao Criar o usuário", error);

            throw new InternalServerErrorException("Erro ao processar o cadastro. Tente novamente mais tarde.")
        }
    }
}