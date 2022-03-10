import { app } from '../../index';
import request from 'supertest';
import http from 'http';

describe('Update User', () => {

  test('GET /users/1', (done) => {
    request(app)
      .get('/users/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.id).toBe(1)
        expect(res.body.data.name).toBe("sample1")
        expect(res.body.data.firstname).toBe("sample1_firstname")
        expect(res.body.data.lastname).toBe("sample1_lastname")
        expect(res.body.data.email).toBe("sample1@example.com")
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

  test('PUT /users/1', (done) => {
    request(app)
      .put('/users/1')
      .set('Content-Type', 'application/json')
      .send('{"id": 1, "name": "hogehoge", "firstname": "sample1_firstname", "lastname": "sample1_lastname", "email": "sample1@example.com"}')
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
        expect(res.body.data.id).toBe(1)
        expect(res.body.data.name).toBe("hogehoge")
        expect(res.body.data.firstname).toBe("sample1_firstname")
        expect(res.body.data.lastname).toBe("sample1_lastname")
        expect(res.body.data.email).toBe("sample1@example.com")
        done()
      })
      .catch((err) => {
        done(err)
      })
  });

})


