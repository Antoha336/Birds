import { Species } from "src/species/species.entity";
import { Entity, Column, Relation, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    latin_name: string;

    @Column({ nullable: true })
    russian_name: string;

    @OneToMany(() => Species, (species) => species.id)
    order_species: Relation<Species>[];
}