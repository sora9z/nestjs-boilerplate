import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  async getUser() {
    return 'Hello User';
  }
}
