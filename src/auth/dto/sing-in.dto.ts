import { IsString } from 'class-validator'

export class SingInDto {
    @IsString({message: 'Введите корретное имя пользователя'})
    username: string;

    @IsString()
    password: string;
}