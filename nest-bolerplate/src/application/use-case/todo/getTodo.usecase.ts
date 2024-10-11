import { Inject, Injectable } from '@nestjs/common';
import { TodoE } from 'core/entity/todo.entity';
import { TODO_REPOSITORY } from 'core/repositories/repository.tokens';
import { TodoRepository } from 'core/repositories/todoRepository.interface';

@Injectable()
export class GetTodoUseCases {
  constructor(
    @Inject(TODO_REPOSITORY) private todoRepository: TodoRepository,
  ) {}

  async execute(id: number): Promise<TodoE> {
    return await this.todoRepository.findById(id);
  }
}
