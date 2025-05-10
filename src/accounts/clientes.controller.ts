import { Module } from '@nestjs/common';
import { ClienteModule } from './clientes.module'; // Caminho correto
import { MongooseModule } from '@nestjs/mongoose';
@Module({

  imports: [ClienteModule], // Adicionando o módulo Cliente
})
export class AppModule {}
// clientes.controller.ts
export class ClientesController {
  // seu código aqui
}
import { Controller, Get, Post, Body, Param } from '@nestjs/common';