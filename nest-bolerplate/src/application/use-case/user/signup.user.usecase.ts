import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UserE } from 'core/entity/user.entity';
import { UserRepository } from 'core/repositories/userRepository.interface';
import * as bcrypt from 'bcrypt';
import { USER_REPOSITORY } from 'core/repositories/repository.tokens';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SignupUserUseCases {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository,
    private configService: ConfigService,
  ) {}

  async execute(email: string, password: string, name: string): Promise<UserE> {
    try {
      const existingUser = await this.userRepository.findByEmail(email);

      if (existingUser) {
        throw new ConflictException('User already exists');
      }
    } catch (error) {
      // 존재하지 않는다면 pass
    }

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(this.configService.get<string>('SALT_ROUNDS')) || 10,
    );

    const newUser = new UserE();
    newUser.email = email;
    newUser.password = hashedPassword;
    newUser.name = name;

    const result = await this.userRepository.insert(newUser);
    return result;
  }
}
