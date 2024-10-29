import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { CoursesController } from './controllers/courses.controller';
import { ReviewsController } from './controllers/reviews.controller';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BootcampsModule } from './bootcamps/bootcamps.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3311,
      username: 'root',
      password: 'admin',
      database: 'MariaDB2902081',
      entities: [],
      synchronize: true,
      autoLoadEntities:true,
      dropSchema:true
    }),
    BootcampsModule,
  ],
  controllers: [AppController, BootcampsController, CoursesController, ReviewsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
                                                                                                                                                            