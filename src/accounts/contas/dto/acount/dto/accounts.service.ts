

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Accounts } from '../../../contas.schemas';
import { Model } from 'mongoose';
import { CreateAccountDto } from './create-account.dto';
import { UpdateAccountDto } from './update-account.dto';

@Injectable()
export class AccountsService {
    constructor(
        @InjectModel(Accounts.name) private contaModel: Model<Accounts>
    ) {}
  
    create(conta: CreateAccountDto)  {
        const createdConta = new this.contaModel(conta);
        return createdConta.save();
      }
    
      findAll()  {
        return this.contaModel.find().exec();
      }
    
      findOne(numero: number)  {
        return this.contaModel.findOne({ numero: numero }).exec();
      }
    
      async update(id: number, account: UpdateAccountDto)  {
        const conta = await this.contaModel.findOneAndUpdate({ number: id }, account).exec();
        return conta
      }
    
      async remove(id: number)  {
        const conta = await this.contaModel.findOneAndDelete({ number: id }).exec();
        return conta
      }
}
