import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  sobrenome: string;

  @Prop({ required: true })
  cpf: string;

  @Prop({ required: true })
  email: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
