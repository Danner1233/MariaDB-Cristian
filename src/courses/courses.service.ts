import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private courseRepository: Repository<Course>){}
  create(createCourseDto: CreateCourseDto) {
    const nuevoCourse =
    this.courseRepository.create(createCourseDto);

    return this.courseRepository.save(nuevoCourse)
  }




    findAll() {
    return this.courseRepository.find();
  }



  

  findOne(id: number) {
    return this.courseRepository.findOneBy({id: id});
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {

    const updCourse = await this.courseRepository.findOneBy({ id });
  

    if (!updCourse) {
      throw new Error(`Curso con id ${id} no encontrado`);
    }
  
    this.courseRepository.merge(updCourse, updateCourseDto);
  
    const updatedCourse = await this.courseRepository.save(updCourse);
  
    if (updatedCourse) {
      return `El curso con el id: ${id}, fue actualizado`;
    } else {
      throw new Error(`Error al actualizar el curso con id ${id}`);
    }
  }

  async remove(id: number) {
 
    const course = await this.courseRepository.findOneBy({ id });

    if (!course){
      return `El Course con el id: ${id}, no exite.`;
    }
  

    await this.courseRepository.delete(id); 

    return `El course con el id: ${id}, ha sido eliminado.`;
  }
}
