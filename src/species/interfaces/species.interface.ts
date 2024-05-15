import { OrderInterface } from "src/order/interfaces/order.interface";

export class SpeciesInterface {
    latin_name: string;
    russian_name: string = null;
    order: OrderInterface = null;
}