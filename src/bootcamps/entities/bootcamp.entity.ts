import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Bootcamp {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    phone:number

    @Column()
    name:string

}
