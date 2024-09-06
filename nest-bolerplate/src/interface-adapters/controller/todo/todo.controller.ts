import { Body, Controller, Inject, Post } from '@nestjs/common';

import { AddTodoUseCases } from 'core/use-case/todo/addTodo.usecase';
import { UsecaseProxyModule } from 'infrastructure/usecases-proxy/usecase-prox.module';
import { UseCaseProxy } from 'infrastructure/usecases-proxy/usecase-proxy';

@Controller('todo')
export class TodoController {
  constructor(
    @Inject(UsecaseProxyModule.TODO_USECASE_PROXY)
    private readonly addTodoUsecaseProxy: UseCaseProxy<AddTodoUseCases>,
  ) {}

  @Post()
  async createTodo(@Body() body: any): Promise<any> {
    const result = await this.addTodoUsecaseProxy
      .getInstance()
      .execute(body.title, body.content);
    return result;
  }
}
