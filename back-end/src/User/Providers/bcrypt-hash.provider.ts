import { Injectable } from "@nestjs/common";
import { IHashProvider } from "./hash-provider.interface";
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptHashProvider implements IHashProvider {

    async hash(payload: string): Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(payload, salt);
    }

    async compare(payload: string, hashed: string): Promise<Boolean> {
        return bcrypt.compare(payload, hashed)
    }
}