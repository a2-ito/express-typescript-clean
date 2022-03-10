"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const supertest_1 = __importDefault(require("supertest"));
describe('Create User', () => {
    test('POST /users', (done) => {
        (0, supertest_1.default)(index_1.app)
            .post('/users')
            .set('Content-Type', 'application/json')
            .send('{"id": 3, "name": "hogehoge", "firstname": "hogehoge", "lastname": "hogehoge", "email": "sample3@example.com"}')
            .then((res) => {
            expect(res.status).toBe(200);
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
    test('GET /users/3', (done) => {
        (0, supertest_1.default)(index_1.app)
            .get('/users/3')
            .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.data.id).toBe(3);
            expect(res.body.data.name).toBe("hogehoge");
            expect(res.body.data.firstname).toBe("hogehoge");
            expect(res.body.data.lastname).toBe("hogehoge");
            expect(res.body.data.email).toBe("sample3@example.com");
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
