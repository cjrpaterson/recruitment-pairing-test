const app = require('../src/app')
const request = require('supertest')

describe('app', () => {
    it('exists', () => {
        expect(app).toBeDefined()
    })

    describe('/open/resource', () => {
        it('returns the resource', () => {
            return request(app)
              .get('/open/resource')
              .expect(200)
              .then(response => {
                  expect(response.text).toBe('anyone can see me')
              })
        })

    })
    describe('/secret/resource', () => {
        it.skip('redirects to login page if the request contains no cookie', () => {
            return request(app)
              .get('/secret/resource')
              .expect(302)
              .then(response => {
                  expect(response.header('Location')).toBe('https://login.acuris.com')
              })
        })
    })
})
