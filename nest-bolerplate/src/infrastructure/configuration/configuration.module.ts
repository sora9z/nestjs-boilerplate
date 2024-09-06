import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseConfigModule } from './database-config/database-config.module';
import { TypeOrmConfigModule } from './typeorm/typeorm.module';

@Module({
  imports: [
    DatabaseConfigModule,
    TypeOrmConfigModule,
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'local' ? '.env.local' : '.env',
      ignoreEnvFile:
        process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test'
          ? false
          : true,
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
