import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { CoursesModule } from './courses/courses.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';


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
      autoLoadEntities: true,
      dropSchema: true
    }),
    BootcampsModule,
    CoursesModule,
    ReviewsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
                                                                                                                                                            