/**
 * Root Router
 * Redirectionamiento de routers
 */

import express, { Request, Response} from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

// instanciando el servidor
let server = express();

// instanciando router
let rootRouter = express.Router();

// activar request a localhost:8000/api

// GET: -> activar request a localhost:8000/api/
rootRouter.get("/", (req: Request, res: Response) => {
    LogInfo('GET: http//:localhost:8000/api')
    res.send("hola desde api");
});

// redireccionamiento de rutas y controladores
server.use('/', rootRouter); //localhost:/api/
server.use('/hello', helloRouter); //localhost:/api/hello
// aca aderimos mas rutas

export default server;







