import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../parcial/models/persona';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { tap, catchError } from 'rxjs/operators';

const httOptionsPut ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private HandleErrorService: HandleHttpErrorService)
    {
      this.baseUrl = baseUrl;
    }

    get(): Observable<Persona[]> {
      return this.http.get<Persona[]>(this.baseUrl + 'api/PersonaControllers')
        .pipe(
          tap(_ => this.HandleErrorService.log('datos enviados')),
          catchError(this.HandleErrorService.handleError<Persona[]>('Consulta Persona', null))
        );
    }
  /** GET persona by identificacion. Will 404 if id not found */
  getId(id: string): Observable<Persona> {
    const url = `${this.baseUrl + 'api/PersonaControllers'}/${id}`;
    return this.http.get<Persona>(url, httpOptions)
      .pipe(
        catchError(this.HandleErrorService.handleError<Persona>('Buscar Persona', null))
      );
  }
  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/PersonaControllers', persona)
      .pipe(
        tap(_ => this.HandleErrorService.log('datos enviados')),
        catchError(this.HandleErrorService.handleError<Persona>('Registrar Persona', null))
      );

  }

}
