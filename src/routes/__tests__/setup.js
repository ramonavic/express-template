import express from 'express'
import bodyParser from 'body-parser'

import routes from '../setupRoutes'

const app = express()
app.use(bodyParser.json())

routes.forEach((route) => {
	app.use(route.default) // TODO remove wrapper around the default property.
})

export default app
