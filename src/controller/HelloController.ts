import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger"; 

@Route("/api/hello")
@Tags("HelloController")

export class HelloController implements IHelloController{

    /**
     * @param name Nombre para saludar a name
     * @returns { BasicResponse } Promesa BasicResponse
     */
    @Get("/")
    public async getMessage(@Query('name')name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');

        return {
            message: `Hola ${name || "mundo"}`
        }
    }
    
}