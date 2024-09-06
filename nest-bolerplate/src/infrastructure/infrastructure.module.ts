import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseConfigModule } from './configuration/database-config/database-config.module';
import { UsecaseProxyModule } from './usecases-proxy/usecase-prox.module';

@Module({
  imports: [
    DatabaseConfigModule,
    DatabaseModule,
    ConfigurationModule,
    UsecaseProxyModule,
  ],
  exports: [UsecaseProxyModule],
})
export class InfrastructureModule {}
