import { IsNumberString } from "class-validator";

export class DeleteSpeciesDto {
    @IsNumberString(null, { message: 'Должен быть передан целочисленный id' })
    id: number;
}