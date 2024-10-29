import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { server } from 'typescript';
import { Student } from './entidades/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //EndPoint: metodo que se ejecuta cuando se invoca determinada URL desde el cliente http(BRUNO)

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Enpoint
  //1. Metodo HTTP a utlizar(junto con la ruta)
  //2. Firma del metodo a invocar
  //3. Instrucciones a ejecutar
  @Get("/prueba1")
  mensaje():string{
    return "Mensaje prueba 1";
  }

  @Get("/bootcamps/:id/curso/:cursoId")
  mensajeBootcampPorId(@Param("id") id:string,
                      @Param("cursoId") cursoId:string):string{
      return `mostrar bootcamp con id: ${id} y el curso es ${cursoId}`
  }

  @Get ("/identificacion/:id")
  getIdentificacion(@Query("nombre") nombre:string,
                    @Query("edad") edad:number,
                    @Param("id") id:number,
                    @Query("ciudad") ciudad:string): Student{
    return new Student (id, nombre, edad, ciudad)
  
  }

}
