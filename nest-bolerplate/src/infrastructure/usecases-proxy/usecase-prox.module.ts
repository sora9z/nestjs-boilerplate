import { DynamicModule, Module } from '@nestjs/common';
import { Todo } from 'infrastructure/database/entities';
import {
  TodoRepository,
  UserRepository,
} from 'infrastructure/database/repositories';
import { RepositoriesModule } from 'infrastructure/database/repositories/repositories.module';
import { UseCaseProxy } from './usecase-proxy';
import { AddTodoUseCases } from 'core/use-case/todo/addTodo.usecase';
import { GetTodoUseCases } from 'core/use-case/todo/getTodo.usecase';

@Module({
  imports: [RepositoriesModule],
})
export class UsecaseProxyModule {
  static TODO_USECASE_PROXY = 'TODO_USECASE_PROXY';
  static USER_USECASE_PROXY = 'USER_USECASE_PROXY';

  static register(): DynamicModule {
    return {
      module: UsecaseProxyModule,
      providers: [
        {
          inject: [TodoRepository],
          provide: UsecaseProxyModule.TODO_USECASE_PROXY,
          useFactory: (todoRepository: TodoRepository) =>
            new UseCaseProxy(new AddTodoUseCases(todoRepository)),
        },
        {
          inject: [TodoRepository],
          provide: UsecaseProxyModule.USER_USECASE_PROXY,
          useFactory: (todoRepository: TodoRepository) =>
            new UseCaseProxy(new GetTodoUseCases(todoRepository)),
        },
        // {
        //     inject:[UserRepository],
        //     provide: UsecaseProxyModule.USER_USECASE_PROXY,
        //     useFactory: (userRepository: UserRepository) =>
        //       new UseCaseProxy(new GetTodoUseCases(userRepository)),
        // }
      ],
      exports: [
        UsecaseProxyModule.TODO_USECASE_PROXY,
        UsecaseProxyModule.USER_USECASE_PROXY,
      ],
    };
  }
}
