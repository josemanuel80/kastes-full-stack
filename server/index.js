import bodyParser from 'body-parser';
import routers from './routes/app.js';
import express from 'express';
import cors from 'cors';
const port=5000;






const server=express();
server.use(cors());
server.use(bodyParser.json());
server.use(routers);
server.listen(port,()=>console.log('listening at port', port));