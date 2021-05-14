import {Router} from 'express';
import { createTask, deleteTask, getTask, getTasks, updateTask, countTasks } from '../controllers/tasks.controller';

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/count', countTasks)
router.post('/tasks', createTask)
router.get('/tasks/:id', getTask)
router.delete('/tasks/:id', deleteTask)
router.put('/tasks/:id', updateTask)

export default router