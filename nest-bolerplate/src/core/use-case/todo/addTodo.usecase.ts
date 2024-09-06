import { TodoE } from 'core/entity/todo.entity';
import { ITodoRepository } from 'core/repositories/todoRepository.interface';

export class AddTodoUseCases {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(title: string, content: string): Promise<TodoE> {
    const todo = new TodoE();
    todo.title = title;
    todo.content = content;
    todo.isDone = false;

    const result = await this.todoRepository.insert(todo);

    return result;
  }
}
