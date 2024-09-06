import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Todo } from './todo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  name: string;

  @Column('text')
  password: string;

  @Column('varchar', { nullable: true })
  signupVerificationToken: string;

  @CreateDateColumn({ name: 'createdAt ' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt ' })
  updatedAt: Date;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
