import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Gist } from '../gist-list/gist';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable()
export class GistService {
  mainURL = 'https://api.github.com/';  // URL to web api
  gistsURL = 'gists'
  usersURL = 'users'

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('GistService');
  }

  /** GET Gist from the server */
  getGists (): Observable<Gist[]> {
    return this.http.get<Gist[]>(this.mainURL + this.gistsURL )
      .pipe(
        catchError(this.handleError('getGist', []))
      );
  }

  /** GET Gist from the server */
  getGistsByUser (username:String): Observable<Gist[]> {
    return this.http.get<Gist[]>(this.mainURL + this.usersURL + '/' + username + '/' + this.gistsURL )
      .pipe(
        catchError(this.handleError('getGist', []))
      );
  }

  /** GET Gist from the server */
  getGist (id: String): Observable<Gist> {
    return this.http.get<Gist>(this.mainURL + this.gistsURL + '/' + id);
  }
}