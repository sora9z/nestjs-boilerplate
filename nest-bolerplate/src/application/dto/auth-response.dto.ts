import { UserE } from 'core/entity/user.entity';

export class AuthResponseDto {
  accessToken: string;
  refreshToken: string;
  user: UserE;
}
