import { app } from '../index';
import supertest from 'supertest';
import http from 'http';

// integration test
describe('demo', () => {
  //let server: HttpServer;
  //let server: http.createServer;
  let server: any;
  let request: any;
  beforeAll((done) => {
    server = app.listen(done);
    request = supertest.agent(server);
  });

  afterAll((done) => {
    server.close(done);
  });

  /*
  test('get users', () => {
    return request(app)
      .get('/users')
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('[{"_id":1,"_name":"sample1"},{"_id":2,"_name":"sample2"}]');
      });
  });

  test('get user1', () => {
    return request(app)
      .get('/user/1')
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('{"_id":1,"_name":"sample1"}');
      });
  });
   */

  it('get users', (done) => {
    //const response = await supertest(app).get('/users')
    request(app)
      .get('/users')
      .end(done);
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
