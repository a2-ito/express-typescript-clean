"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSerializer = void 0;
const moment_1 = __importDefault(require("moment"));
const ApplicationSerializer_1 = require("./ApplicationSerializer");
class UserSerializer extends ApplicationSerializer_1.ApplicationSerializer {
    user(data) {
        if (!data) {
            return {
                code: ApplicationSerializer_1.StatusCode.exception,
                message: "data is null",
                responsedAt: (0, moment_1.default)().format()
            };
        }
        return {
            code: ApplicationSerializer_1.StatusCode.success,
            data: {
                id: data.id,
                name: data.name,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email
            },
            responsedAt: (0, moment_1.default)().format()
        };
    }
    users(data) {
        if (!data) {
            return {
                code: ApplicationSerializer_1.StatusCode.exception,
                message: "data is null",
                responsedAt: (0, moment_1.default)().format()
            };
        }
        return {
            code: ApplicationSerializer_1.StatusCode.success,
            data: data.map((d) => {
                return {
                    id: d.id,
                    name: d.name,
                    firstname: d.firstname,
                    lastname: d.lastname,
                    email: d.email
                };
            }),
            responsedAt: (0, moment_1.default)().format()
        };
    }
    delete() {
        return {
            code: ApplicationSerializer_1.StatusCode.success,
            data: {},
            responsedAt: (0, moment_1.default)().format()
        };
    }
}
exports.UserSerializer = UserSerializer;
