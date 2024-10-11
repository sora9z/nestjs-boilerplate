import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo, User } from '../entities';
import { TodoRepositoryImpl, UserRepositoryImpl } from '../repositories';
import {
  TODO_REPOSITORY,
  USER_REPOSITORY,
} from 'core/repositories/repository.tokens';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, User])],
  providers: [
    {
      provide: TODO_REPOSITORY,
      useClass: TodoRepositoryImpl,
    },
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [TODO_REPOSITORY, USER_REPOSITORY],
})
export class RepositoriesModule {}
