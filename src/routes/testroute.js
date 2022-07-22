import { Router } from 'express'
import * as TestController from '../controllers/testController/testController.js'

const router = new Router()

router.get('/test', TestController.test)

export default router



