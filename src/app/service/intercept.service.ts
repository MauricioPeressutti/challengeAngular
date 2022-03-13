import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor(
    private loginService: LoginService,
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('currentToken') ? localStorage.getItem('currentToken') : null;
      if (token) {
        const reqClone = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(reqClone).pipe(
          catchError((err: HttpErrorResponse) => {
            if (err instanceof HttpErrorResponse) {
              //Notificar error
            }
            return throwError(err);
          }),
        );
      } else {
        return next.handle(request).pipe(
          catchError((err: HttpErrorResponse) => {
            if (err instanceof HttpErrorResponse) {
              //Notificar error
            }
            return throwError(err);
          }),
        );
      }
  }

  loguot() {
    this.loginService.logout();
  }
}
