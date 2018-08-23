import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Gist } from '../gist-list/gist';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable()
export class GistService {
  mainURL = 'https://api.github.com/';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('GistService');
  }

  /** GET heroes from the server */
  getGists (): Observable<Gist[]> {
    return this.http.get<Gist[]>(this.mainURL+'gists')
      .pipe(
        catchError(this.handleError('getGist', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchGists(term: string): Observable<Gist[]> {
    term = term.trim();

    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Gist[]>(this.mainURL, options)
      .pipe(
        catchError(this.handleError<Gist[]>('searchGists', []))
      );
  }
}