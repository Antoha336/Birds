import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dto/sing-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  singIn(@Body() singInDto: SingInDto): Promise<{ access_token: string }> {
    return this.authService.signIn(singInDto.username, singInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  singUp(@Body() singInDto: SingInDto): Promise<{ access_token: string }> {
    return this.authService.singUp(singInDto.username, singInDto.password);
  }
}
