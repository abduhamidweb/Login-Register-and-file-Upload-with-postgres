import { Router } from 'express'
import student from '../controller/students.js'
const students = Router()
students.get('/students', student.GET)
students.get('/students/:id', student.GET)
export default students
