import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { WishItem } from '../shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private readonly wishesUrl = 'assets/wishes.json';

  constructor(private readonly http: HttpClient) {}

  private getStandardOptions(): {
    headers: HttpHeaders;
    params?: HttpParams;
  } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getWishes(): Observable<WishItem[]> {
    const options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });

    return this.http
      .get<WishItem[]>(this.wishesUrl, options)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error(
        'There is an issue with the client or network:',
        error.error
      );
    } else {
      console.error(
        `Server-side error (${error.status}):`,
        error.error
      );
    }

    return throwError(
      () => new Error('Cannot Fetch Wishes! Try Something Dummy')
    );
  }

  addWish(wish: WishItem): Observable<WishItem> {
    const options = this.getStandardOptions();

    options.headers = options.headers.set(
      'Authorization',
      'value-need-for-authorization'
    );

    return this.http.post<WishItem>(
      this.wishesUrl,
      wish,
      options
    );
  }
}