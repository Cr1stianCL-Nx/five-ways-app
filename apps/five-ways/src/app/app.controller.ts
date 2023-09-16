import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { PostConsumeDto } from './dto/post-consume.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*GET IMPLEMENTATIONS */

  @Get('nestjs-axios')
  getNestJSAxiosCall() {
    return this.appService.getNestJSAxiosData();
  }

  @Get('axios')
  getAxiosCall() {
    return this.appService.getAxiosData();
  }

  @Get('needle')
  getNeedleCall() {
    return this.appService.getNeedleData();
  }

  @Get('got')
  getGotCall() {
    return this.appService.getGotData();
  }

  @Get('node-fetch')
  getNodeFetchCall() {
    return this.appService.getNodeFetchData();
  }

  @Get('super-agent')
  getSuperAgentCall() {
    return this.appService.getSuperAgentData();
  }

  /*POST IMPLEMENTATIONS */

  @Post('nestjs-axios')
  posNestJSAxiosSend(@Body() body: PostConsumeDto) {
    return this.appService.postNestJSAxiosData(body);
  }

  @Post('axios')
  postAxiosSend(@Body() body: PostConsumeDto) {
    return this.appService.postAxiosData(body);
  }

  @Post('needle')
  postNeedleSend(@Body() body: PostConsumeDto) {
    return this.appService.postNeedleData(body);
  }

  @Post('got')
  postGotSend(@Body() body: PostConsumeDto) {
    return this.appService.postGotData(body);
  }

  @Post('node-fetch')
  postNodeFetchSend(@Body() body: PostConsumeDto) {
    return this.appService.postNodeFetchData(body);
  }

  @Post('super-agent')
  async postSuperAgentSend(@Body() body: PostConsumeDto) {
    const result = this.appService.postSuperAgentData(body);
    return result;
  }

  /*POST CONSUME TEST*/
  @Post('post-consume')
  PostCross(@Body() body: PostConsumeDto) {
    return {
      status: 'success',
      payload: true,
    };
  }
}
