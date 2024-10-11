import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserE } from 'core/entity/user.entity';
import { UserRepository } from 'core/repositories/userRepository.interface';
import { User } from '../entities';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<UserE | null> {
    const userEntity = await this.userEntityRepository.findOne({
      where: { email },
    });
    return this.toUserDomainEntity(userEntity);
  }

  async insert(user: UserE): Promise<UserE> {
    const userEntity: User = this.toUserEntity(user);

    const result = await this.userEntityRepository.insert(userEntity);
    return this.toUserDomainEntity(result.generatedMaps[0] as User);
  }

  updateSignupVerificationToken(email: string, token: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  private toUserDomainEntity(userEntity: User): UserE {
    const user: UserE = new UserE();

    user.id = userEntity.id;
    user.email = userEntity.email;
    user.name = userEntity.name;
    user.password = userEntity.password;

    return user;
  }

  private toUserEntity(user: UserE): User {
    const userEntity: User = new User();
    console.log('testset', user);

    userEntity.email = user.email;
    userEntity.name = user.name;
    userEntity.password = user.password;
    return userEntity;
  }
}
