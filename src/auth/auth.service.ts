import { Injectable } from '@nestjs/common'; 
import { UsersService } from 'src/users';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    
    console.log("username::", username)

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  } 
}