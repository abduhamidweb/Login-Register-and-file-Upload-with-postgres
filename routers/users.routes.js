import { Router } from "express";
import usersController from '../controller/users.js'
const users = Router()
 users.get('/users', usersController.GET);
users.get('/users/:id', usersController.GET);
users.post("/course", usersController.POST);
users.delete("/users/:id", usersController.DELETE);
users.put('/users/:id', usersController.UPDATE);
export default users