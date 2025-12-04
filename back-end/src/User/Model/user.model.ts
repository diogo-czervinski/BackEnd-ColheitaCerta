export class User {
    id?: number;
    name: string;
    email: string;
    pass: string;
    tell: string;

    constructor(props: Partial<User>){
        Object.assign(this, props)
    }
}
