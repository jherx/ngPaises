import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespPasis } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
  private http: HttpClient
  ) { }


  searchCountry(termino:string): Observable<RespPasis[]>{
    const urlPais = `${environment.apiUrl}/name/${termino}`
    return this.http.get<RespPasis[]>(`${environment.apiUrl}/name/${termino}`)
  }

  busquedaPorAlphacode( code: string): Observable<RespPasis[]>{
    const url = `${environment.apiUrl}/alpha/${code}`
    return this.http.get<RespPasis[]>(url)
    .pipe(
      catchError( error => {
        console.log( error)

        return of([])
      })
    )
  }

  buscarCapital(termino:string): Observable<RespPasis[]>{
    const url = `${environment.apiUrl}/capital/${termino}`
    return this.http.get<RespPasis[]>(url)
  }
  
  buscarRegion(termino:string): Observable<RespPasis[]>{
    const url = `${environment.apiUrl}/region/${termino}`
    return this.http.get<RespPasis[]>(url)
  }

  
}
