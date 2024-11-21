import { IsNotEmpty, IsNumber, MinLength, MaxLength, IsString, IsDate, IsPositive, Min, Max, Matches, IsDateString} from "class-validator"

export class CreateBootcampDto {


    @IsNumber()
    @IsPositive({ message: 'El número no es positivo' })
    @IsNotEmpty({ message: 'El número no puede estar vacío' })
    readonly phone: number

    @IsNotEmpty({message:"El nombre es obligatorio"})
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    readonly name: string

    @IsString()
    @IsNotEmpty({ message: 'La dirección no puede estar vacía' })
    readonly address: string

    @IsString()
    @IsNotEmpty({ message: 'Los temas no pueden estar vacíos' })
    readonly topics: string

    @IsDateString()
    readonly createdAt: Date

}
