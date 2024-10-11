import { Module } from '@nestjs/common';

import { TodoController } from './todo/todo.controller';
import { UserController } from './user/user.controller';
import { UseCaseModule } from 'application/use-case/use-case.module';

@Module({
  imports: [UseCaseModule],
  controllers: [TodoController, UserController],
})
export class ControllerModule {}
