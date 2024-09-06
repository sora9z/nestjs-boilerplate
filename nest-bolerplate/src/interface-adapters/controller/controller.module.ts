import { Module } from '@nestjs/common';

import { TodoController } from './todo/todo.controller';
import { UserController } from './user/user.controller';
import { UsecaseProxyModule } from 'infrastructure/usecases-proxy/usecase-prox.module';

@Module({
  imports: [UsecaseProxyModule.register()],
  controllers: [TodoController, UserController],
})
export class ControllerModule {}
