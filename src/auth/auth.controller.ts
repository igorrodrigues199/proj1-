import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { APP_GUARD } from '@nestjs/core';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: { userId: string }) {
    const token = this.authService.generateToken(body.userId);
    return { accessToken: token };
  }
}