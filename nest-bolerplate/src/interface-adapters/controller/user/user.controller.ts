import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupUserUseCases } from 'application/use-case/user/signup.user.usecase';
import { CreateUserDto } from '../../dto/use/signup-user.dto';
import { Public } from 'interface-adapters/decorator';
import { SigninUserDto } from 'interface-adapters/dto/use/signin-user.dto';
import { SigninUserUseCase } from 'application/use-case/user/signin.user.usecase';

@Controller('user')
export class UserController {
  constructor(
    private readonly signupUserUseCases: SignupUserUseCases,
    private readonly signinUserUseCases: SigninUserUseCase,
  ) {}

  @Get()
  async getUser() {
    return 'Hello User';
  }

  @Public()
  @Post('signup')
  async signup(@Body() body: CreateUserDto): Promise<any> {
    const result = await this.signupUserUseCases.execute(
      body.email,
      body.password,
      body.name,
    );
    return result;
  }

  @Public()
  @Post('signin')
  async signin(@Body() body: SigninUserDto): Promise<any> {
    const result = await this.signinUserUseCases.execute(
      body.email,
      body.password,
    );
    return result;
  }
}
