import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UserService {
  constructor(@InjectModel('Cat') private readonly catModel) { }
  async findAll() {
    return await this.catModel.find().exec()
  }
}
