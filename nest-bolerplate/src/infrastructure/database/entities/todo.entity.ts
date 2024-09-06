import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar')
  title: string;

  @Column('text', { nullable: true })
  content: string;

  @Column('boolean', { default: false })
  isDone: boolean;

  @CreateDateColumn({ name: 'createdAt ' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt ' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
