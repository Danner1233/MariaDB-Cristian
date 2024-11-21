import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "bootcamps"})
export class Bootcamp {

    @PrimaryGeneratedColumn()
    id:number

    @Column({ type: "integer" , 
                nullable: true
    })
    phone:number

    @Column({

        type: "varchar",
        nullable: false
    })
    name:string

    @Column({ type: "varchar", nullable: false })
    address: string

    @Column({  type: "varchar"})
    topics: string

    @Column({  type: "timestamp", default: () => "CURRENT_TIMESTAMP", name:"created_at"})
    createdAt: Date

    @OneToMany(()=> Course, ( curso: Course )=> curso.bootcamp  )
    cursos: Course[]

    @ManyToOne(()=> User, ( usuario: User)=> usuario.bootcamp )
    usuarios: User

    @OneToMany(()=> Review, (vista: Review)=> vista.bootcamp  )
    vista: Review

}
