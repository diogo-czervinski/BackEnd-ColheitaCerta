import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "./Use-Cases/createUser.user-case";
import { CreateUserDto } from "./DTO/create.user.dto";

@Controller("users")
export class UserController{
    constructor(
        private readonly createUserUseCase: CreateUserUseCase
    ){}

    @Post()
    async create(@Body() data: CreateUserDto) {
        return await this.createUserUseCase.execute(data);
    }
}