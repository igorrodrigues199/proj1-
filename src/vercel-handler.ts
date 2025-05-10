import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Request, Response } from 'express';  // Usando express diretamente
import { ExpressAdapter } from '@nestjs/platform-express';

let cachedServer: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());

  // Setup Swagger
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Exemplo de API com Swagger no NestJS')
    .setDescription('Descrição da API de exemplo utilizando Swagger')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.init();
  
  // Express app
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp;
}

export default async function handler(req: Request, res: Response) {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return cachedServer(req, res); // A chamada da função agora usa req, res diretamente
}
