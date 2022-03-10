"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const supertest_1 = __importDefault(require("supertest"));
describe('User', () => {
    test('GET /users', (done) => {
        (0, supertest_1.default)(index_1.app)
            .get('/users')
            .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body[0]._id).toBe(1);
            expect(res.body[0]._name).toBe('sample1');
            expect(res.body[1]._id).toBe(2);
            expect(res.body[1]._name).toBe('sample2');
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
