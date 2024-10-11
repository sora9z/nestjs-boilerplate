import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { USER_REPOSITORY } from 'core/repositories/repository.tokens';
import { UserRepository } from 'core/repositories/userRepository.interface';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseDto } from 'application/dto/auth-response.dto';

@Injectable()
export class SigninUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async execute(email: string, password: string): Promise<AuthResponseDto> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('isPasswordValid', isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    // token 생성
    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION'),
    });

    return {
      accessToken,
      refreshToken,
      user,
    };
  }
}
