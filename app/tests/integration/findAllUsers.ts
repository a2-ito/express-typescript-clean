import { app } from '../../index';
import request from 'supertest';
import http from 'http';

describe('User', () => {

  test('GET /users', (done) => {
    request(app)
      .get('/users')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].name).toBe('sample1')
        expect(res.body[0].firstname).toBe('sample1_firstname')
        expect(res.body[0].lastname).toBe('sample1_lastname')
        expect(res.body[0].email).toBe('sample1@example.com')
        expect(res.body[1].id).toBe(2)
        expect(res.body[1].name).toBe('sample2')
        expect(res.body[0].firstname).toBe('sample2_firstname')
        expect(res.body[0].lastname).toBe('sample2_lastname')
        expect(res.body[0].email).toBe('sample2@example.com')
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

})


