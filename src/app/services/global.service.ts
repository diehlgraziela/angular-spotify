import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private readonly BASE_URL = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) {}

  async callApi<T>(
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    endpoint: string,
    params = {}
  ): Promise<T> {
    const request = this.http.request<T>(method, this.BASE_URL + endpoint, {
      body: params,
    });

    return await firstValueFrom(request);
  }
}
