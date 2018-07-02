import { Router } from 'express'

import users from './users'
import upload from './upload'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(upload)

export default router
