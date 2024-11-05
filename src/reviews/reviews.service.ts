import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private reviewRepository: Repository<Review>) {}

 
  create(createReviewDto: any) {
    const newReview = this.reviewRepository.create(createReviewDto);
    return this.reviewRepository.save(newReview);
  }


  findAll() {
    return this.reviewRepository.find();
  }

 
  findOne(id: number) {
    return this.reviewRepository.findOneBy({ id });
  }


  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const existingReview = await this.reviewRepository.findOneBy({ id });

    if (!existingReview) {
      return `La reseña con el id #${id} no existe.`;
    }

    this.reviewRepository.merge(existingReview, updateReviewDto);
    return this.reviewRepository.save(existingReview);
  }

 
  async remove(id: number) {
    const review = await this.reviewRepository.findOneBy({ id });

    if (!review) {
      return `La reseña con el id #${id} no existe.`;
    }

    await this.reviewRepository.delete(id);
    return `La reseña #${id} ha sido eliminada.`;
  }
}
