import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    //EndPoint GET:

    @Get()
    getAllBootscamps():string{

        return "Aqui va a mostrar todo los bootscamps"

    }

    @Get(":id")
    getBootcampById(@Param("id") id:number):string{
      return `mostrar bootcamp con id: ${id}`
    }

    @Post()
    createBootcamp():string{
        return "Crear un nuevo bootcamp"
    }

}
