import { Injectable } from '@nestjs/common';
import got from 'got';

@Injectable()
export class GotHttpAdapter {
  async doGotCall() {
    const uri = 'https://rickandmortyapi.com/api/character/?page=19';
    return await got(uri).json();
  }

  async doGotSend(body) {
    const uri = 'http://localhost:3000/api/post-consume';
    return await got
      .post(uri, {
        json: body,
      })
      .json()
      .catch(console.error);
  }
}
