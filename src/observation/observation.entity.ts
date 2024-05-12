import { Entity, Column, Relation, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "src/users/users.entity";
import { Prediction } from "src/prediction/prediction.entity";

@Entity()
export class Observation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    user: Relation<User>;

    @Column('decimal', {precision: 6, scale: 4})
    latitude: number;

    @Column('decimal', {precision: 7, scale: 4})
    longitude: number;

    @Column()
    status: string;

    @Column()
    picture: string;

    @OneToMany(() => Prediction, (prediction) => prediction.id)
    predictions: Relation<Prediction>[];
}