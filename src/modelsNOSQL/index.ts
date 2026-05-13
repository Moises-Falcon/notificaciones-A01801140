import mongoose from "mongoose";
import { DB_NOSQL_NAME, DB_NOSQL_USER, DB_NOSQL_PASS, DB_NOSQL_HOST } from "../config";

class MongoConnection {
    private readonly mongoUri: string;

    constructor() {
        const auth = DB_NOSQL_USER && DB_NOSQL_PASS
            ? `${DB_NOSQL_USER}:${DB_NOSQL_PASS}@`
            : '';
        const authSource = DB_NOSQL_USER && DB_NOSQL_PASS ? '?authSource=admin' : '';
        this.mongoUri = `mongodb://${auth}${DB_NOSQL_HOST}:27017/${DB_NOSQL_NAME}${authSource}`;
        console.log(this.mongoUri);
    }

    public async connect(): Promise<void> {
        try {
            await mongoose.connect(this.mongoUri);
            console.log("Conexion Mongo exitosa");
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
    }
}

export const dbnosql = new MongoConnection();
