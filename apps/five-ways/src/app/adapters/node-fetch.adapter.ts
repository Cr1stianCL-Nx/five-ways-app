import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class NodeFetchHttpAdapter {
  async doNodeFetchCall() {
    const uri = 'https://rickandmortyapi.com/api/character/?page=19';

    try {
      const response = await fetch(uri);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async doNodeFetchSend(body) {
    const uri = 'http://localhost:3000/api/post-consume';

    try {
      const response = await fetch(uri, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}
