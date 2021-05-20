import {Router} from 'express';
import { createTask, deleteTask, getTask, getTasks, updateTask, countTasks } from '../controllers/tasks.controller';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generate id of task
 *        description:
 *          type: string
 *          description: the description of the task
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: fsaodofsoidk8sd9fssadf7s8a
 *        name: My First Task
 *        description: I have to do something
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /task:
 *  get:
 *    summary: Return a Task List
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */

router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get Total task Count
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the total number of tasks
 *        content:
 *          text/plain:
 *            schema:
 *              type: integer
 *              example: 5
 */
router.get('/tasks/count', countTasks)

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: create a new task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The task successfully created (Tarea fue creada con exito )
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: some server error (Algun error del servidor)
 */
router.post('/tasks', createTask)

/**
 * @swagger
 * /tasks/{id}:
 *  post:
 *    summary: Get a task by id
 *    tags: [Tasks]
 *    parameters:
 *     
 *    responses:
 *      200:
 *        description: The task successfully created (Tarea fue creada con exito )
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: some server error (Algun error del servidor)
 */
router.get('/tasks/:id', getTask)
router.delete('/tasks/:id', deleteTask)
router.put('/tasks/:id', updateTask)

export default router