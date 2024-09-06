import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DatabaseConfig } from '../database-config/database-config.interface';

@Injectable()
export class DatabaseConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}
  getDatabaseType(): string {
    return this.configService.get<string>('DATABASE_TYPE');
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabaseSchema(): string {
    return this.configService.get<string>('DATABASE_SCHEMA');
  }

  getDatabaseSynchronize(): boolean {
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
  }
}
