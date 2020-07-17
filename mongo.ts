import { MongoClient } from "./deps.ts";

//DcOuNbDp22T9AdUC
const client = new MongoClient();
client.connectWithUri(Deno.env.get('MongoDB_URI')!);

const db = client.database("SchoolUsers");

export const usersCollection = db.collection('users');