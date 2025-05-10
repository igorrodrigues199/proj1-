import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Exemplo de API com Swagger no NestJS')
    .setDescription('Descrição da API de exemplo utilizando Swagger')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  // Configuração do prefixo global
  app.setGlobalPrefix('api');

  // Inicialização e configuração da porta
  await app.listen(3000);
}

bootstrap()