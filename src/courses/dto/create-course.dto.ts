import { IsNotEmpty, IsNumber, MinLength, MaxLength, IsString, IsDate, IsPositive, Min, Max, Matches, IsDateString} from "class-validator"

export class CreateCourseDto {

    @IsNotEmpty({message:"El nombre es obligatorio"})
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    readonly title: string

    @IsNotEmpty({message:"El nombre es obligatorio"})
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    readonly description: string

    @IsNumber()
    @IsPositive({ message: 'El número no es positivo' })
    @IsNotEmpty({ message: 'El número no puede estar vacío' })
    readonly weeks: number

    @IsNumber()
    @IsPositive({ message: 'El tuition no es positivo' })
    @IsNotEmpty({ message: 'El tuition no puede estar vacío' })
    readonly tuition: number

    @IsNotEmpty({message:"El minimumSkill es obligatorio "})
    readonly minimumSkill: minimumSkill

    @IsDateString()
    readonly createdAt: Date


}

enum minimumSkill{
    "Beginner",
    "Intermediate",
    "Advanced"
}
