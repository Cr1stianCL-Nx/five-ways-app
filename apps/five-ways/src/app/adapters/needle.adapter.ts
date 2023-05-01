import { Injectable } from '@nestjs/common';
import needle from 'needle';

@Injectable()
export class NeedleHttpAdapter {
  async doNeedleCall() {
    const uri = 'https://rickandmortyapi.com/api/character/?page=19';

    return await needle('get', uri)
      .then(function (response) {
        return response.body;
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  async doNeedleSend(body) {
    const uri = 'http://localhost:3000/api/post-consume';

    return await needle('post', uri, body)
      .then(function (response) {
        return response.body;
      })
      .catch(console.error);
  }
}
