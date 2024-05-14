import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty({message: 'Название не должно быть пустым'})
    latin_name: string;

    russian_name: string;
}