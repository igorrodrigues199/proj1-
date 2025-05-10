import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesController } from './clientes.controller';
import { ClienteService } from './clientes.service';
import { Cliente, ClienteSchema } from './clientes.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }])],
  controllers: [ClientesController],
  providers: [ClienteService],
})
export class ClienteModule {}
