import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '你好time!';
  }
  getNews(): Array<String> {
    return [
      '你好啊1',
      '你好啊2',
      '你好啊s3',
      '你好啊4'
    ];
  }
}
