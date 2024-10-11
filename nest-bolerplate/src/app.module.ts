import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './interface-adapters/controller/controller.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import {
  APP_FILTER,
  APP_GUARD,
  APP_INTERCEPTOR,
  Reflector,
} from '@nestjs/core';
import { ResponseInterceptor } from 'interface-adapters/interceptors/response.interceptor';
import { HttpExceptionFilter } from 'interface-adapters/filters/http-exception.filter';
import { JwtAuthGuard } from 'interface-adapters/guard/auth.guard';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ControllerModule,
    InfrastructureModule,
    ApplicationModule,
    JwtModule.registerAsync({
      global: true,
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION') },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    Reflector,
    ConfigService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
