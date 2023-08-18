/**
 * respuesta basica controlador JSON
 */
export type BasicResponse = {
    message: string;
}


/**
 * Respuesta error controlador JSON
 */
export type ErrorResponse = {
    error: string,
    message:string
}