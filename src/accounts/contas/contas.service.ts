import { Injectable } from '@nestjs/common';

@Injectable()
export class ContasService {
  constructor(
  ) {}

  create(conta: any)  {}

  findAll()  {}

  findOne(id: number)  {}

  async update(id: number, conta: any)  {}

  async remove(id: number)  {}
}