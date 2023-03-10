import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private readonly apiUrl = 'any';

  constructor(private http: HttpClient) { }

  servers$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/server`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  handleError(handleError: any): Observable<never> {
    return throwError(() => { new Error('Not Implemented') });
  }
}