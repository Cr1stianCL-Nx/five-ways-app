import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class NestJSAxiosHttpAdapter {
  constructor(private readonly httpService: HttpService) {}

  doNestsJSAxiosCall(): Observable<any> {
    const uri = 'https://rickandmortyapi.com/api/character/?page=19';

    try {
      return this.httpService
        .get(uri)
        .pipe(map((response: AxiosResponse) => response.data));
    } catch (error) {
      console.error(error);
    }
  }

  doNestJSAxiosSend(body) {
    const uri = 'http://localhost:3000/api/post-consume';

    try {
      return this.httpService
        .post(uri, body)
        .pipe(map((response: AxiosResponse) => response.data));
    } catch (error) {
      console.error(error);
    }
  }
}
