import { Inject } from '@nestjs/common';
import { TodoE } from 'core/entity/todo.entity';
import { TODO_REPOSITORY } from 'core/repositories/repository.tokens';
import { TodoRepository } from 'core/repositories/todoRepository.interface';

export class AddTodoUseCases {
  constructor(
    @Inject(TODO_REPOSITORY) private todoRepository: TodoRepository,
  ) {}

  async execute(title: string, content: string): Promise<TodoE> {
    const todo = new TodoE();
    todo.title = title;
    todo.content = content;
    todo.isDone = false;

    const result = await this.todoRepository.insert(todo);

    return result;
  }
}
