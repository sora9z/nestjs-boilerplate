import { UserE } from '../entity/user.entity';

export interface UserRepository {
  findByEmail(email: string): Promise<UserE | null>;
  insert(user: UserE): Promise<UserE>;
  updateSignupVerificationToken(email: string, token: string): Promise<void>;
}
