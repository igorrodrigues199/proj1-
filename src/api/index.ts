import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { createServer, proxy } from 'aws-serverless-express';
import { Context, Handler } from 'aws-lambda';
import { Server } from 'http';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  const app = await NestFactory.create(AppModule);

  const apiPath = 'api';
  app.setGlobalPrefix(apiPath);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Exemplo de API com Swagger no NestJS')
    .setDescription('Descrição da API de exemplo utilizando Swagger')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${apiPath}/docs`, app, document);

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return createServer(expressApp);
}

export const handler: Handler = async (
  event: any,
  context: Context
) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer();
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
