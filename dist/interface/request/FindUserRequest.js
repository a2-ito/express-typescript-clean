"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserRequest = void 0;
//import { TypedRequest } from "./ExpressRequest";
const ErrorCode_1 = require("../../constant/ErrorCode");
class FindUserRequest {
    constructor(params) {
        const validId = this.validRequest(params);
        this._id = validId;
    }
    get id() {
        return this._id;
    }
    validRequest(params) {
        console.log(params);
        const id = params.id;
        const numberId = Number(id);
        if (typeof numberId !== "number") {
            throw new Error(JSON.stringify({
                code: ErrorCode_1.StatusCode.invalid,
                message: "不正なrequest idです"
            }));
        }
        return numberId;
    }
}
exports.FindUserRequest = FindUserRequest;
//export type TFindUserRequest = TypedRequest<Params>;
