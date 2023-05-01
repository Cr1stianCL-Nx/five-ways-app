import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AxiosHttpAdapter {
  async doAxiosCall() {
    const uri = 'https://rickandmortyapi.com/api/character/?page=19';

    try {
      const response = await axios.get(uri);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async doAxiosSend(body) {
    const uri = 'http://localhost:3000/api/post-consume';

    try {
      const response = await axios.post(uri, body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
