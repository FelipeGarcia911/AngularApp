import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { loginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private handleError: HandleError;
  mainURL = 'https://api.github.com/';  // URL to web api

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('GistService');
  }

  signIn (token: String): Observable<loginResponse> {
    return this.http.get<loginResponse>(this.mainURL+'?access_token='+token)
  }
}
