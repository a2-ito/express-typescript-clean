import { app } from '../../index';
import request from 'supertest';
import http from 'http';

describe('User', () => {

  test('GET /users/1', (done) => {
    request(app)
      .get('/users/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.id).toBe(1)
        expect(res.body.data.name).toBe('sample1')
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

})
