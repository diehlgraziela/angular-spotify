import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../environments/environment';
import { Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser;

  constructor(
    private http: HttpClient,
    private router: Router,
    private globalService: GlobalService
  ) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  extractTokenFromUrl() {
    if (!window.location.hash) return '';

    const params = window.location.hash.split('&');
    return params[0].split('=')[1];
  }

  getLoginUrl() {
    const authEndpoint = `${config.authUrl}?`;
    const clientId = `client_id=${config.clientId}&`;
    const redirectUrl = `redirect_uri=${config.redirectUrl}&`;
    const scopes = `scope=${config.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async getCurrentUser() {
    try {
      this.user = await this.globalService.callApi<IUser>('get', 'me');
    } catch (error) {
      console.error(error);
    }
  }
}
