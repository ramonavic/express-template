import express from "express"
import routes from '../setupRoutes'

const app = express()

routes.forEach((route) =>  {
    app.use(route.default) // TODO remove wrapper around the default property.
})

export default app



