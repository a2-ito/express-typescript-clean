"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlConnection = void 0;
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
const util_1 = __importDefault(require("util"));
const IDBConnection_1 = require("../interface/database/mysql/IDBConnection");
class MysqlConnection extends IDBConnection_1.IDBConnection {
    constructor() {
        super();
        dotenv_1.default.config();
        this.pool = mysql_1.default.createPool({
            connectionLimit: 5,
            host: process.env.DB_HOST_DEV,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: Number(process.env.DB_PORT),
            timezone: process.env.TIMEZONE,
            insecureAuth: false
        });
        this.pool.getConnection((error, connection) => {
            if (error) {
                console.error(error);
                if (error.code === "PROTOCOL_CONNECTION_LOST") {
                    console.error("Database connection was closed.");
                }
                if (error.code === "ER_CON_COUNT_ERROR") {
                    console.error("Database has too many connections.");
                }
                if (error.code === "ECONNREFUSED") {
                    console.error("Database connection was refused.");
                }
            }
            if (connection)
                connection.release();
            return;
        });
        // @ts-ignore
        this.pool.query = util_1.default.promisify(this.pool.query);
        this.pool.on("connection", () => {
            console.log("mysql connection create");
        });
        this.pool.on("release", (connection) => {
            console.log("Connection %d released", connection.threadId);
        });
    }
    execute(query, params = null) {
        if (params !== null) {
            return this.pool.query(query, params);
        }
        else {
            return this.pool.query(query);
        }
    }
}
exports.MysqlConnection = MysqlConnection;
