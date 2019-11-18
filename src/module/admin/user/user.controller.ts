import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServie: UserService) {}
  @Get() 
  async index() {
    const db = await this.userServie.findAll()
    return {
      str: '走你',
      db
    }
  }
}
