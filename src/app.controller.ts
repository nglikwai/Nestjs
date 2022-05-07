import { Controller,Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getRootRoute(){
        return 'hi';
    }
    @Get('bye')
    getByeThere(){
        return 'bye there'
    }
}