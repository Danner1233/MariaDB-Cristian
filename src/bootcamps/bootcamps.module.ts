import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/users/entities/user.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bootcamp, Course, User, Review])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
