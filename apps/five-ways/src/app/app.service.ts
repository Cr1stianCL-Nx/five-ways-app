import { Injectable } from '@nestjs/common';
import { AxiosHttpAdapter } from './adapters/axios.adapter';
import { NeedleHttpAdapter } from './adapters/needle.adapter';
import { GotHttpAdapter } from './adapters/got.adapter';
import { NodeFetchHttpAdapter } from './adapters/node-fetch.adapter';
import { SuperAgentHttpAdapter } from './adapters/super-agent.adapter';
import { NestJSAxiosHttpAdapter } from './adapters/nestjs-axios.adapter';

@Injectable()
export class AppService {
  constructor(
    private readonly axiosAdapter: AxiosHttpAdapter,
    private readonly nestJSAxiosAdapter: NestJSAxiosHttpAdapter,
    private readonly needleAdapter: NeedleHttpAdapter,
    private readonly gotAdapter: GotHttpAdapter,
    private readonly nodeFetchAdapter: NodeFetchHttpAdapter,
    private readonly superAgentAdapter: SuperAgentHttpAdapter
  ) {}

  /*GET IMPLEMENTATION */

  getNestJSAxiosData() {
    return this.nestJSAxiosAdapter.doNestsJSAxiosCall();
  }
  getAxiosData() {
    return this.axiosAdapter.doAxiosCall();
  }

  getNeedleData() {
    return this.needleAdapter.doNeedleCall();
  }

  getGotData() {
    return this.gotAdapter.doGotCall();
  }

  getNodeFetchData() {
    return this.nodeFetchAdapter.doNodeFetchCall();
  }

  getSuperAgentData() {
    return this.superAgentAdapter.doSuperAgentCall();
  }

  /*POST IMPLEMENTATION */

  postNestJSAxiosData(body) {
    return this.nestJSAxiosAdapter.doNestJSAxiosSend(body);
  }

  postAxiosData(body) {
    return this.axiosAdapter.doAxiosSend(body);
  }

  postNeedleData(body) {
    return this.needleAdapter.doNeedleSend(body);
  }

  postGotData(body) {
    return this.gotAdapter.doGotSend(body);
  }

  postNodeFetchData(body) {
    return this.nodeFetchAdapter.doNodeFetchSend(body);
  }

  postSuperAgentData(body) {
    return this.superAgentAdapter.doSuperAgentSend(body);
  }
}
