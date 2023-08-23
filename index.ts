import dotenv from "dotenv"; 
import server from "./src/server";
import { LogError, LogSuccess } from "./src/utils/logger";

// configuracion de archivo .env
dotenv.config();

// process accede al .env 
const PORT: string | number = process.env.PORT || 8000;

// ejecutar la app / escuchar
server.listen(PORT, () => {
    LogSuccess(`Servidor levantado en http://localhost:${PORT}/api`)
});

server.on('error', err => {
    LogError(`Server error ${err}`)
})