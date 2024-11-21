import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", nullable: false})
    title: string


    @Column({type: "text", nullable: false})
    description: string

    @Column({type: "tinyint", nullable:false, default: 4})
    weeks: number

    @Column({type: "double", nullable: false})
    tuition: number

    @Column({name: "minimun_skill", type: "enum", enum: ["Beginner","Intermediate","Advanced"]})
    minimumSkill: minimumSkill

    @Column({  type: "timestamp", default: () => "CURRENT_TIMESTAMP", name:"created_at"})
    createdAt: Date


    @ManyToOne(()=> Bootcamp, ( bootcamp: Bootcamp )=> bootcamp.cursos )
    bootcamp: Bootcamp
}

enum minimumSkill{
    "Beginner",
    "Intermediate",
    "Advanced"
}



