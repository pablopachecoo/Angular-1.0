import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// The HttpClient service makes use of observables for all transactions. 
// You must import the RxJS observable and operator symbols that appear in the example snippets.
//  These ConfigService imports are typical.

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http: HttpClient) { }

  options: {
    // headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }


  getConfig() {
    console.log("getConfig Iniciado")
    return this.http.get("https://pokeapi.co/api/v2/pokemon/lugia");
  }


  // object. Later sections show some of the additional option possibilities   stop em https://angular.io/guide/http
}


