import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './src/routes/setupRoutes.js'

const port = process.env.port || 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())

if (process.env.environment === 'dev' || !process.env.environment) {
	app.use('*', (req, es, next) => {
		console.log('current path: ', req.url)
		next()
	})
}

routes.forEach((route) => {
	app.use(route.default) // TODO remove wrapper around the default property.
})

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
