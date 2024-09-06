import { Injectable } from '@nestjs/common';

import { UserE } from 'core/entity/user.entity';
import { IUserRepository } from 'core/repositories/userRepository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  getUserByEmail(email: string): Promise<UserE> {
    throw new Error('Method not implemented.');
  }
  updateSignupVerificationToken(email: string, token: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
