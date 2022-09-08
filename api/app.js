import express from 'express';
import routers from './routes/index.js';
import logger from 'morgan'
import bodyParser from 'body-parser';


const app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

routers(app);

export default app;