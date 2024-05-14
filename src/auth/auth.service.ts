import { Injectable, UnauthorizedException, BadRequestException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username, is_admin: user.is_admin };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async singUp(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user != undefined) {
        throw new BadRequestException();
    }
    await this.usersService.create({username: username, password: pass});
    return this.signIn(username, pass);
  }
}