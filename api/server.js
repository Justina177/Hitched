import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const server = http.createServer(app);

const port = process.env.PORT;

mongoose.connect(process.env.mongoDB_URL)
    .then(()=> console.log('Database connected!!'))
    .catch((err)=> console.log(err));

server.listen(port, () => console.log(`server listening on port::: ${port}`));