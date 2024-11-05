import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {


    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar", nullable: false})
    name: string

    @Column({type:"varchar", nullable: false})
    emailt: string

    @Column({type:"varchar", nullable: false, default: 4})
    role: string

    @Column({type:"varchar", nullable: false})
    password: String


}
