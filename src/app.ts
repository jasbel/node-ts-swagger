import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//Swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJsDock from 'swagger-jsdoc'


import taskRoutes from './routes/tasks.routes'
import { options } from './swaggerOptions';

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors()) /* comunicacion con otros servidores */
app.use(morgan('dev')) /* Ver las peticiones */
app.use(express.json()) /* Conversion a JSON */

const specs = swaggerJsDock(options)

app.use(taskRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app