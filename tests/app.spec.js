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
})