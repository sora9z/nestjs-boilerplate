import { Body, Controller, Post } from '@nestjs/common';
import { AddTodoUseCases } from 'application/use-case/todo/addTodo.usecase';

@Controller('todo')
export class TodoController {
  constructor(private readonly addTodoUsecase: AddTodoUseCases) {}

  @Post()
  async createTodo(@Body() body: any): Promise<any> {
    const result = await this.addTodoUsecase.execute(body.title, body.content);
    return result;
  }
}
