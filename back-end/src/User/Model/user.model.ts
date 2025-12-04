export class User {
    id?: number;
    name: string;
    email: string;
    pass: string;
    tel: string;

    constructor(props: Partial<User>){
        Object.assign(this, props)
    }
}
