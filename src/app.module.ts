import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoController } from './produto/produto.controller';

@Module({
  imports: [ProdutoModule],
  controllers: [AppController], 

  providers: [],
})
export class AppModule {

}
