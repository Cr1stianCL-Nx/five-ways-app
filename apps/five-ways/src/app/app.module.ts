import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiosHttpAdapter } from './adapters/axios.adapter';
import { NeedleHttpAdapter } from './adapters/needle.adapter';
import { GotHttpAdapter } from './adapters/got.adapter';
import { NodeFetchHttpAdapter } from './adapters/node-fetch.adapter';
import { SuperAgentHttpAdapter } from './adapters/super-agent.adapter';
import { NestJSAxiosHttpAdapter } from './adapters/nestjs-axios.adapter';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    NestJSAxiosHttpAdapter,
    AxiosHttpAdapter,
    NeedleHttpAdapter,
    GotHttpAdapter,
    NodeFetchHttpAdapter,
    SuperAgentHttpAdapter,
  ],
})
export class AppModule {}
