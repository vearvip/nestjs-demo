import { Controller, Get, Query, Request, Post, Body, Put, Response, Render } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get() 
  @Render('default/user')
  index() {
    return {
      "name": "哈哈哈哈哈"
    }
  }
  @Get('add') 
  addData(@Query() query) {
    return '用户中增加数据心' + JSON.stringify(query)
  }
  @Get('edit') 
  editData(@Request() request) {
    console.log('request', request.query)
    return '编辑'
  }
  @Post('create') 
  create(@Body() body) {
    console.log('ahahhaha', JSON.stringify(body))
    return '我是create方法'
  }
  @Put('create') 
  change(@Body() body) {
    console.log('ahahhaha', JSON.stringify(body))
    return '我是Put方法'
  }
  @Post('doAdd') 
  doAdd(@Body() body, @Response() response) {
    console.log(body)
    response.redirect('/user')
  }
}
