"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const supertest_1 = __importDefault(require("supertest"));
describe('Delete User', () => {
    test('DELETE /users', (done) => {
        (0, supertest_1.default)(index_1.app)
            .delete('/users/1')
            .set('Content-Type', 'application/json')
            .send('{"id": 1, "name": "hogehoge"}')
            .then((res) => {
            expect(res.status).toBe(200);
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
    test('GET /users/1', (done) => {
        (0, supertest_1.default)(index_1.app)
            .get('/users/1')
            .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.code).toBe(5000);
            expect(res.body.message).toBe("data is null");
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
