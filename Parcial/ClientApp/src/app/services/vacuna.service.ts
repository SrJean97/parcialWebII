import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Vacuna } from '../parcial/models/vacuna';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
export class VacunaService {
  
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private HandleErrorService: HandleHttpErrorService)
    {
      this.baseUrl = baseUrl;
    }

    get(): Observable<Vacuna[]> {
      return this.http.get<Vacuna[]>(this.baseUrl + 'api/VacunaControllers')
        .pipe(
          tap(_ => this.HandleErrorService.log('datos enviados')),
          catchError(this.HandleErrorService.handleError<Vacuna[]>('Consulta Vacuna', null))
        );
    }
  /** GET persona by identificacion. Will 404 if id not found */
  getId(id: string): Observable<Vacuna> {
    const url = `${this.baseUrl + 'api/PersonaControllers'}/${id}`;
    return this.http.get<Vacuna>(url, httpOptions)
      .pipe(
        catchError(this.HandleErrorService.handleError<Vacuna>('Buscar Vacuna', null))
      );
  }
  post(vacuna: Vacuna): Observable<Vacuna> {
    return this.http.post<Vacuna>(this.baseUrl + 'api/VacunaControllers', vacuna)
      .pipe(
        tap(_ => this.HandleErrorService.log('datos enviados')),
        catchError(this.HandleErrorService.handleError<Vacuna>('Registrar Vacuna', null))
      );

  }
}