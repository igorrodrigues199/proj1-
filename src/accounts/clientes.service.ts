import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Cliente, ClienteDocument } from './clientes.schemas';
import { CreateClienteDto } from './create.clientes.dto';
import { UpdateClienteDto } from './update.clientes.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel(Cliente.name) private readonly clienteModel: Model<ClienteDocument>,
  ) {
    this.createIndexes();
  }

  // Criação de índices para otimizar consultas
  private createIndexes() {
    const schema = this.clienteModel.schema;
    schema.index({ email: 1 }, { unique: true }); // Exemplo de índice único no campo 'email'
    // Adicione outros índices conforme necessário
  }

  // Criar um novo cliente
  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = new this.clienteModel(createClienteDto);
    return cliente.save();
  }

  // Buscar todos os clientes
  async findAll(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  // Buscar um cliente por ID
  async findOne(id: string): Promise<Cliente | null> {
    return this.clienteModel.findById(id).exec();
  }

  // Atualizar um cliente
  async update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente | null> {
    return this.clienteModel.findByIdAndUpdate(id, updateClienteDto, { new: true }).exec();
  }

  // Deletar um cliente
  async remove(id: string): Promise<Cliente | null> {
    return this.clienteModel.findByIdAndDelete(id).exec();
  }
}
