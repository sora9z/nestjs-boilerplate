import { UserE } from '../entity/user.entity';

export interface IUserRepository {
  getUserByEmail(email: string): Promise<UserE>;
  updateSignupVerificationToken(email: string, token: string): Promise<void>;
}
