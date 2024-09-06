import { TodoE } from 'core/entity/todo.entity';
import { ITodoRepository } from 'core/repositories/todoRepository.interface';

export class GetTodoUseCases {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(id: number): Promise<TodoE> {
    return await this.todoRepository.findById(id);
  }
}
