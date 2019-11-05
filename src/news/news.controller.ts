import { Controller, Get, Param, Render } from '@nestjs/common';
import {NewsService} from './news.service'

@Controller('news')
export class NewsController {
  constructor(private newsServices:NewsService){}
  @Get() 
  @Render('default/news')
  index(@Param() param) {
    console.log(param)
    return {
      news: this.newsServices.findAll()
    }
  }
}
