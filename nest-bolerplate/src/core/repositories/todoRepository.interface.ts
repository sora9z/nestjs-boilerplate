import { TodoE } from '../entity/todo.entity';

export interface TodoRepository {
  insert(todo: TodoE): Promise<TodoE>;
  findAll(): Promise<TodoE[]>;
  findById(id: number): Promise<TodoE>;
  updateContent(id: number, content: string): Promise<void>;
  updateTodoState(id: number, isDone: boolean): Promise<void>;
  deleteById(id: number): Promise<void>;
}
