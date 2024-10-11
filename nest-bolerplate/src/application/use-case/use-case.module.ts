import { Module } from '@nestjs/common';
import { SignupUserUseCases } from './user/signup.user.usecase';
import { GetTodoUseCases } from './todo/getTodo.usecase';
import { InfrastructureModule } from 'infrastructure/infrastructure.module';
import { AddTodoUseCases } from './todo/addTodo.usecase';
import { SigninUserUseCase } from './user/signin.user.usecase';

@Module({
  imports: [InfrastructureModule],
  providers: [
    GetTodoUseCases,
    AddTodoUseCases,
    SignupUserUseCases,
    SigninUserUseCase,
  ],
  exports: [
    GetTodoUseCases,
    AddTodoUseCases,
    SignupUserUseCases,
    SigninUserUseCase,
  ],
})
export class UseCaseModule {}
