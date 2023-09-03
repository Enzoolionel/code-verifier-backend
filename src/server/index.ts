import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";

// swagger
import swaggerUI from "swagger-ui-express";


import cors from 'cors';
import helmet from 'helmet';

// TODO: HTTPS

// rutas
import router from '../routes';


dotenv.config()

const server: Express = express();


// configuracion para usar swagger
server.use(
    '/docs',
    swaggerUI.serve,
    swaggerUI.setup(undefined, {
        swaggerOptions:{
            url: "/swagger.json",
            explorer: true
        }
    })
);

server.use(
    '/api',
    router
    );

//static server
server.use(express.static('public'));

// TODO: mongo conexion
mongoose.connect('mongodb://localhost:27017/');


server.use(helmet());
server.use(cors());


server.use(express.urlencoded({ extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}))


server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;

