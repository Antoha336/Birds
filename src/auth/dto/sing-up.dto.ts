import { IsString, Length } from 'class-validator'

export class SingUpDto {
    @IsString({ message: 'Введите корретное имя пользователя' })
    username: string;

    @Length(8, 64, { message: 'Пароль должен состоять минимум из 8, максимум из 64 символов' })
    password: string;
}