import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';

import { MongooseModule } from '@nestjs/mongoose';
import {CatSchema} from '../../schema/cat.schema'
import { UserService } from './user/user.service';

@Module({
  imports: [MongooseModule.forFeature([{ 
    name: 'Cat', 
    schema: CatSchema,
    collection: 'cats'
  }])],
  controllers: [UserController],
  providers: [UserService]
})
export class AdminModule {}
