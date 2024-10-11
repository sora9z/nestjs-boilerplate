import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseConfigModule } from './configuration/database-config/database-config.module';
import { RepositoriesModule } from './database/repositories/repositories.module';

@Module({
  imports: [DatabaseConfigModule, DatabaseModule, ConfigurationModule],
  exports: [DatabaseModule],
})
export class InfrastructureModule {}
