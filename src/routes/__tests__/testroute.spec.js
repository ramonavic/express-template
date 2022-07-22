import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from './setup.js'

describe('GET /test', () => {
	it('should return a 200 and Hello World', async () => {
		const response = await request(app)
			.get('/test')
			.set('Accept', 'application/json')

		expect(response.headers['content-type']).toMatch(/json/)
		expect(response.body.message).toEqual('Hello world')
		expect(response.status).toEqual(200)
	})
})
