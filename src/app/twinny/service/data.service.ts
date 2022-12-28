import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    public getDrinks(url: string):Observable<any>{
      return this.http.get<any[]>(url).pipe(
        map( (resp: any) => {
        return resp;
        } ),
        catchError(this.handleError<any>())
        );

     }


     private handleError<T>(result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
    };
  }
}
