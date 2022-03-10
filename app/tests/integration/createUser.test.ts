import { app } from '../../index';
import request from 'supertest';
import http from 'http';

describe('Create User', () => {

  test('POST /users', (done) => {
    request(app)
      .post('/users')
      .set('Content-Type', 'application/json')
      .send('{"id": 3, "name": "hogehoge", "firstname": "hogehoge", "lastname": "hogehoge", "email": "sample3@example.com"}')
      .then((res) => {
        expect(res.status).toBe(200)
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

  test('GET /users/3', (done) => {
    request(app)
      .get('/users/3')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.id).toBe(3)
        expect(res.body.data.name).toBe("hogehoge")
        expect(res.body.data.firstname).toBe("hogehoge")
        expect(res.body.data.lastname).toBe("hogehoge")
        expect(res.body.data.email).toBe("sample3@example.com")
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

})


