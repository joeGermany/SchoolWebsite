import { usersCollection } from "../mongo.ts";

export default class User {
    public id: string;
    public name: string;
    public username: string;
    public email: string;
    public password: string;

    constructor 
    ({
        id = '',
        name = '',
        username = '',
        email = '',
        password = ''
    }) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static async findUser(params: object) {
        const user = await usersCollection.findOne(params);
        if (!user) return null;
        return User.prepare(user);
    }

    async create() { 
        delete this.id;
        const {$oid} = await usersCollection.insertOne(this);
        this.id = $oid;
        return this;
    }

    // async update() {
    //     await usersCollection.updateOne({_id: {$oid: this.id}}, {$set: {name, description}});
    //     this.name = name;
    //     this.description = description;
    //     return this;
    // }

    protected static prepare(data: any): User {
        data.id = data._id.$oid;
        delete data._id;
        return new User(data);
    }
}