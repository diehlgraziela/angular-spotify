import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const reqClone = req.clone({
    setHeaders: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${authService.getToken()}`,
    },
  });

  return next(reqClone);
};
