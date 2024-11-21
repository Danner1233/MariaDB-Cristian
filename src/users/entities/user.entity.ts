import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user"})
export class User {


    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar", nullable: false})
    name: string

    @Column({type:"varchar", nullable: false})
    emailt: string

    @Column({type:"varchar", nullable: false, default: 4})
    role: role

    @Column({type:"varchar", nullable: false})
    password: String


    @OneToMany(()=> Bootcamp, ( bootcamp: Bootcamp )=> bootcamp.usuarios)
    bootcamp: Bootcamp

    @OneToMany(()=> Review, ( vista: Review )=> vista.usuarios)
    vista: Review

}
enum role{
    "Administrador",
    "Cliente"
}
