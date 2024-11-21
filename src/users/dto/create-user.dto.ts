import { IsNotEmpty, IsNumber, MinLength, MaxLength, IsString, IsDate, IsPositive, Min, Max, Matches, IsDateString} from "class-validator"


export class CreateUserDto {


    @IsNotEmpty({message:"El nombre es obligatorio"})
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    readonly name: string


    @IsString()
    @IsNotEmpty({message:"El email es obligatorio"})
    readonly emailt: string

    @IsNotEmpty({message:"El rol es obligatorio"})
    @IsString()
    readonly role: role


    @IsNotEmpty({message:"La contraseña es obligatoria"})
    readonly password: String


}
enum role{
    "Administrador",
    "Cliente"
}