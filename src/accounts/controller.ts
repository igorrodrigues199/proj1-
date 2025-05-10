import { Body, Controller, Post, Patch } from '@nestjs/common';
import { CreateAccountDto } from './contas/dto/acount/dto/create-account.dto';
import { UpdateAccountDto } from './contas/dto/acount/dto/update-account.dto';

@Controller('contas')
export class ContaController {
  @Post()
  criarConta(@Body() createContaDto: CreateAccountDto) {
    return { message: 'Conta criada com sucesso!', data: createContaDto };
  }

  @Patch()
  atualizarConta(@Body() updateContaDto: UpdateAccountDto) {
    return { message: 'Conta atualizada com sucesso!', data: updateContaDto };
  }
}