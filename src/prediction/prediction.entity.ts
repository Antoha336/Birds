import { Observation } from "src/observation/observation.entity";
import { Species } from "src/species/species.entity";
import { Entity, Column, Relation, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Prediction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Observation, (observation) => observation.predictions)
    observation: Relation<Observation>;

    @ManyToOne(() => Species, (species) => species.predictions)
    species: Relation<Species>;

    @Column('decimal', {precision: 5, scale: 2})
    probability: number;
}