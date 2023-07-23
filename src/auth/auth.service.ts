import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log("validateUser::")
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log("validateUser result::", result)
      return result;
    }
    return null;
  }
 
  async login(user: any) {
    const payload = { name: user.name, sub: user.id };
    console.log("test::")
    return { 
      access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret})
    };
  }
}