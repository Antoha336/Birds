import { Entity, Column, Relation, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Order } from "src/order/order.entity";
import { Prediction } from "src/prediction/prediction.entity";

@Entity()
export class Species {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  latin_name: string;

  @Column({ nullable: true })
  russian_name: string;

  @ManyToOne(() => Order, (order) => order.order_species)
  order: Relation<Order>;

  @OneToMany(() => Prediction, (prediction) => prediction.id)
  predictions: Relation<Prediction>[];
}