import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  create(createUserDto: CreateUserDto) {
   
    const nuevoUser =
    this.userRepository.create(createUserDto);

    return this.userRepository.save(nuevoUser)
  }




  findAll() {
    return this.userRepository.find();
  }




  findOne(id: number) {
    return this.userRepository.findOneBy({id: id});
  }




  async update(id: number, updateUserDto: UpdateUserDto) {
  
    const updUser = await this.userRepository.findOneBy({id:id})
    await this.userRepository.merge(updUser, updateUserDto)
    return this.userRepository.save(updUser

    )
  
  }



  async remove(id: number) {
 
    const user = await this.userRepository.findOneBy({ id });

    if (!user){
      return `El User con el id: ${id}, no exite.`;
    }
  
    await this.userRepository.delete(id); 

    return `El User con el id: ${id}, ha sido eliminado.`;
  }
}
