import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService, JwtAuthGuard, LocalAuthGuard } from './auth';
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('login req::', req.body);

    const result = await this.authService.login(req.user);
    console.log('login result::', result);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
