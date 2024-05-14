import { IsNumber } from "class-validator";

export class DeleteOrderDto {
    @IsNumber(null, { message: 'Должен быть передан целочисленный id' })
    id: number;
}