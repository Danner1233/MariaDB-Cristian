import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

import { Repository } from 'typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BootcampsService {

  constructor(@InjectRepository(Bootcamp) private bootcampRepository: Repository<Bootcamp>){}

  create(createBootcampDto: any) {
   
    const nuevoBootcamp =
    this.bootcampRepository.create(createBootcampDto);

    return this.bootcampRepository.save(nuevoBootcamp)
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id: id});
  }


  

  async update(id: number, updateBootcampDto: any) {
  
    const updBootcamp = await this.bootcampRepository.findOneBy({id:id})
    await this.bootcampRepository.merge(updBootcamp, updateBootcampDto)
    return this.bootcampRepository.save(updBootcamp
      
    )
  
  }


  async remove(id: number) {
 
    const bootcamp = await this.bootcampRepository.findOneBy({ id });

    if (!bootcamp){
      return `El bootcamp #${id} no exite.`;
    }
  

    await this.bootcampRepository.delete(id);

    return `Bootcamp #${id} ha sido eliminado.`;
  }
}
