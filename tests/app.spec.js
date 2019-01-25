const app = require('../src/app')
const request = require('supertest')

describe('app', () => {
    it('exists', () => {
        expect(app).toBeDefined()
    })

    it('shows message on /open/resource', () => {
        return request(app)
            .get('/open/resource')
            .expect(200)
            .then(response => {
                expect(response.text).toBe('anyone can see me')
            })
    })

    it.skip('shows a 401 if the page is restricted', () => {
        return request(app)
            .get('/secret/resource')
            .expect(401)
            .then(response => {
                expect(response.text).toBe('Unauthorised')
            })
    })
})
