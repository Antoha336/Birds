import { IsNotEmpty, IsString, IsOptional, IsNumberString } from "class-validator";
import { OrderInterface } from "src/order/interfaces/order.interface";

export class CreateSpeciesDto {
    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString()
    latin_name: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString()
    russian_name: string;

    @IsNumberString(null, { message: 'Должен быть передан целочисленный id' })
    orderId: number;

    order: OrderInterface;
}