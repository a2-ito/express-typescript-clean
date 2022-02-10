import { app } from '../index';
import request from 'supertest';
import http from 'http';

// integration test
describe('demo', () => {
  //let server: HttpServer;
  //let server: http.createServer;

  afterAll((done) => {
    done();
  });

  it('get users', async () => {
    //const response = await supertest(app).get('/users')
    return request(app)
      .get('/users')
      .expect(200);
  });

});

/*
test('delete user', () => {
  return request(app)
    .delete('/user/1')
    .then((response) => {
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('{"_id":1,"_name":"sample1"}');
    });
});
 */
