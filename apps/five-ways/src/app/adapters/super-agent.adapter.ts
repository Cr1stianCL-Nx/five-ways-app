import { Injectable } from '@nestjs/common';
const superagent = require('superagent');

@Injectable()
export class SuperAgentHttpAdapter {
  async doSuperAgentCall() {
    const uri = 'https://rickandmortyapi.com/api/character/?page=19';

    try {
      return await superagent.get(uri);
    } catch (error) {
      console.error(error);
    }
  }

  async doSuperAgentSend(body) {
    const uri = 'http://localhost:3000/api/post-consume';

    return await superagent
      .post(uri)
      .send(body)
      .set('accept', 'json')
      .set('Accept', 'application/json')
      .then((res) => res.body)
      .catch(console.error);
  }
}
