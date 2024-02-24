import { Router } from "express";
import { getTasks, getTask, createTask, deleteTask, updateTask } from "../controllers/task.controller.js"; 
import { requiredAuth } from "../middlewares/tokenValidation.js"; 

const router = Router();

router.get('/tasks', requiredAuth, getTasks,)
router.get('/tasks/:id', requiredAuth, getTask,)
router.post('/tasks', requiredAuth, createTask,)
router.put('/tasks/:id', requiredAuth, updateTask)
router.delete('/tasks', requiredAuth, deleteTask)

export default router;