import { CreateUserDto } from "../DTO/create.user.dto";
import { User } from "../Model/user.model";

export abstract class IuserRepository{

    abstract create (data: CreateUserDto): Promise<User>
}