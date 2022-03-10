"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const supertest_1 = __importDefault(require("supertest"));
describe('hoge', () => {
    test('GET', (done) => {
        (0, supertest_1.default)(index_1.app)
            .get('/')
            .then((res) => {
            expect(200);
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
/*
// integration test
describe('demo', () => {
  //let server: HttpServer;
  //let server: http.createServer;

  afterAll((done) => {
    done();
    console.log('hoge');
  });

  it('get users', async () => {
    //const response = await supertest(app).get('/users')
    return request(app)
      .get('/users')
      .expect(200);
  });

});

test('delete user', () => {
  return request(app)
    .delete('/user/1')
    .then((response) => {
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('{"_id":1,"_name":"sample1"}');
    });
});
 */
