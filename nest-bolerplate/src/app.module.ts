import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './interface-adapters/controller/controller.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { UsecaseProxyModule } from 'infrastructure/usecases-proxy/usecase-prox.module';
import { RepositoriesModule } from 'infrastructure/database/repositories/repositories.module';

@Module({
  imports: [
    ControllerModule,
    InfrastructureModule,
    UsecaseProxyModule.register(),
    RepositoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
