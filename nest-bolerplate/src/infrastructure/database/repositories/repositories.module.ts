import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo, User } from '../entities';
import { TodoRepository, UserRepository } from '../repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, User])],
  providers: [TodoRepository, UserRepository],
  exports: [TodoRepository, UserRepository],
})
export class RepositoriesModule {}
