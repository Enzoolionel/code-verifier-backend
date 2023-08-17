import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"; 

// configuracion de archivo .env
dotenv.config();

// creando app 
const app: Express = express();

// process accede al .env 
const PORT: string | number = process.env.PORT || 8000;

// definir ruta de aplicacion principal /
app.get("/", (req: Request, res: Response) => {
    res.send("hola desde res");
});

app.get("/enzo", (req: Request, res: Response) => {
    res.send("hola Enzo");
});

// ejecutar la app / escuchar
app.listen(PORT, () => console.log(`Holis desde listen en puerto:http://localhost:${PORT}`))