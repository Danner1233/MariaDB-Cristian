import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([User, Bootcamp, Review])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
