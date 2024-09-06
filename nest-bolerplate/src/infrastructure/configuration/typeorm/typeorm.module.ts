import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { DatabaseConfigService } from '../database-config/database-config.service';
import { DatabaseConfigModule } from '../database-config/database-config.module';

export const getTypeOrmModuleOptions = (
  config: DatabaseConfigService,
): TypeOrmModuleOptions =>
  ({
    type: config.getDatabaseType(),
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [__dirname + '/../../../**/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../../../**/migrations/*{.ts,.js}'],
    synchronize: config.getDatabaseSynchronize(),
    schema: config.getDatabaseSchema(),
  }) as TypeOrmModuleOptions;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      inject: [DatabaseConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
