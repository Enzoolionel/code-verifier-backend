import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "@/utils/logger";

// CRUD


/**
 * method para obtener user de coleccion users en mongo
 */
export const getAllUsers = async (): Promise<any [] | undefined> =>{

    try {
        let userModel = userEntity();
        
        // buscar todos los usuarios

        return await userModel.find({isDelete: false})

    } catch (err) {
        LogError(`[ORM ERROR]: ${err}`)
    }

}

//TODO:
// obtener user por id
// obtener user por email
// borrar user por id
// crear nuevo usuario
// actualizar usuario por id