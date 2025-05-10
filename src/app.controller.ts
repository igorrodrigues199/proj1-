
import { MongooseModule } from '@nestjs/mongoose';
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AuthGuard } from './guards/auth/auth.guard';  // Caminho relativo correto


@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
    return 'NestJS API funcionando na Vercel 🚀';
  }
}

// Esse é um exemplo de controler
@Controller('users')
export class UsersController {
  @Get('profile')
  @UseGuards(AuthGuard) // É essa linha que deverá ser adicionada na sua função.
  getProfile(@Req() req) {
    return { user: req.user };
  
  }
}

