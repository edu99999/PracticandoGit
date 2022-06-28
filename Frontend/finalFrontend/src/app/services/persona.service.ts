import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  urlBase: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.urlBase + 'persona', httpOptions);
  }

  getPersonaUnica(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('id', id),
    };
    return this.http.get(this.urlBase + 'persona/' + id, httpOptions);
  }

  createPersona(persona: Persona): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };

    let body = JSON.stringify(persona);

    return this.http.post(this.urlBase + 'persona', body, httpOptions);
  }

  updatePersona(persona: Persona): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };

    let body = JSON.stringify(persona);

    return this.http.put(
      this.urlBase + 'persona/' + persona._id,
      body,
      httpOptions
    );
  }

  deletePersona(idPersona: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('id', idPersona),
    };

    return this.http.delete(
      this.urlBase + 'persona/eliminar/' + idPersona,
      httpOptions
    );
  }
}
