import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { ITodoRepository } from 'core/repositories/todoRepository.interface';
import { Todo } from '../entities/todo.entity';
import { TodoE } from 'core/entity/todo.entity';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoEntityRepository: Repository<Todo>,
  ) {}

  async insert(todo: TodoE): Promise<TodoE> {
    console.log('흠', todo);
    const todoEntity: Todo = this.toTodoEntity(todo);

    const result = await this.todoEntityRepository.insert(todoEntity);
    return this.toTodoEntity(result.generatedMaps[0] as Todo);
  }

  async findAll(): Promise<TodoE[]> {
    const todoEntity = await this.todoEntityRepository.find();
    return todoEntity.map((todoEntity) => this.toTotoDomainEitty(todoEntity));
  }

  async findById(id: number): Promise<TodoE> {
    const todoEntity = await this.todoEntityRepository.findBy({ id });
    return this.toTotoDomainEitty(todoEntity[0]);
  }

  async updateContent(id: number, content: string): Promise<void> {
    await this.todoEntityRepository.update(
      {
        id,
      },
      {
        content,
      },
    );
  }
  async updateTodoState(id: number, isDone: boolean): Promise<void> {
    await this.todoEntityRepository.update(
      {
        id,
      },
      {
        isDone,
      },
    );
  }
  async deleteById(id: number): Promise<void> {
    await this.todoEntityRepository.delete({ id });
  }

  // 프레임워크와 라이브러리로부터 독립적인 코드를 작성하기 위해 메서드 정의하여 사용
  private toTotoDomainEitty(todoEntity: Todo): TodoE {
    const todo: TodoE = new TodoE();

    todo.id = todoEntity.id;
    todo.content = todoEntity.content;
    todo.isDone = todoEntity.isDone;
    todo.createdAt = todoEntity.createdAt;
    todo.updatedAt = todoEntity.updatedAt;

    return todo;
  }

  private toTodoEntity(todo: TodoE): Todo {
    const todoEntity: Todo = new Todo();

    todoEntity.id = todo.id;
    todoEntity.title = todo.title;
    todoEntity.content = todo.content;
    todoEntity.isDone = todo.isDone;

    return todoEntity;
  }
}
