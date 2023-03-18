import { Router } from 'express'
import authController from '../controller/auth.js'
const auth = Router()
auth.post('/register', authController.REG)
auth.post('/login', authController.LOG)
auth.get("/check",authController.CHECK )
// users.post('/course', usersController.POST)
// users.delete('/users/:id', usersController.DELETE)
// users.put('/users/:id', usersController.UPDATE)
export default auth
