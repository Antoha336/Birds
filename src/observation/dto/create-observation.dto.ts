import { IsLatitude, IsLongitude, IsOptional } from 'class-validator'

export class CreateObservationDto {
    @IsOptional()
    @IsLatitude()
    latitude: number;

    @IsOptional()
    @IsLongitude()
    longitude: number;
}