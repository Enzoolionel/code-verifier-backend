import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// accede al sistema de enrutado
let helloRouter = express.Router();

// http://localhost:8000/api/hello?name=enzo/
helloRouter.route('/')
    // GET:
    .get(async (req:Request, res:Response) => {
        // obtenemos parametro query
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`);
        // instancia de controler para ejecutar un metodo
        const controler: HelloController = new HelloController();

        // Obtener respuesta
        const response = await controler.getMessage(name);

        // enviar al cliente la respuesta
        return res.send(response);
    })

// expoirt de helloRouter
export default helloRouter;