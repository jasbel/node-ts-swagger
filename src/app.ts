import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import taskRoutes from './routes/tasks.routes'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors()) /* comunicacion con otros servidores */
app.use(morgan('dev')) /* Ver las peticiones */
app.use(express.json()) /* Conversion a JSON */

app.use(taskRoutes)

export default app