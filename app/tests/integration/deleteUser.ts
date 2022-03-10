import { app } from '../../index';
import request from 'supertest';
import http from 'http';

describe('Delete User', () => {

  test('DELETE /users', (done) => {
    request(app)
      .delete('/users/1')
      .set('Content-Type', 'application/json')
      .send('{"id": 1, "name": "hogehoge"}')
      .then((res) => {
        expect(res.status).toBe(200)
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

  test('GET /users/1', (done) => {
    request(app)
      .get('/users/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.code).toBe(5000)
        expect(res.body.message).toBe("data is null")
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

})


