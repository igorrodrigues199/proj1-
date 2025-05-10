import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule} from './accounts/contas/accounts.module'; // Caminho correto
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClienteModule } from './accounts/clientes.module'; // Caminho correto

@Module({
  imports: [
    ConfigModule.forRoot(),  // Para carregar as variáveis de configuração
    ContasModule,          // Módulo de contas
    ClienteModule,           // Módulo de clientes
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'test',  // Nome da conexão (se necessário)
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),  // Variável de ambiente que contém a URL do MongoDB
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// O módulo principal da aplicação, que importa os módulos necessários, incluindo o módulo de contas