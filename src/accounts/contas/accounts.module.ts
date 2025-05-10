import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsSchema } from './contas.schemas';
@Module({
  imports: [],
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}