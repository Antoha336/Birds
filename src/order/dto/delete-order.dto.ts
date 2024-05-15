import { IsNumberString } from "class-validator";

export class DeleteOrderDto {
    @IsNumberString(null, { message: 'Должен быть передан целочисленный id' })
    id: number;
}