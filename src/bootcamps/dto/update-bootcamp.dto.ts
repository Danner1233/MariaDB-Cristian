import { PartialType } from '@nestjs/mapped-types';
import { CreateBootcampDto } from './create-bootcamp.dto';

export class UpdateBootcampDto{

    readonly phone?: number
    readonly name?: string
    readonly address?: string
    readonly topics?: string
    readonly createdAt?: Date
}
