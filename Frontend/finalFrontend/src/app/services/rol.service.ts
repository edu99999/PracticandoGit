import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  urlBase: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}


  getRoles(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.urlBase + 'rol', httpOptions);
  }

  getRol(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('id', id),
      //("id" , sector._id), "id" depende de como lo recuperamos en el backend-NO EN USO-video33:51
    };
    return this.http.get(this.urlBase + 'rol/' + id, httpOptions);
  }

  createRol(rol: Rol): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };

    let body = JSON.stringify(rol);

    return this.http.post(this.urlBase + 'rol', body, httpOptions);
  }

  updateRol(rol: Rol): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };

    let body = JSON.stringify(rol);

    return this.http.put(
      this.urlBase + 'rol/' + rol._id,body,httpOptions
    );
  }

  deleteRol(idRol: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('id', idRol),
    };

    return this.http.delete(this.urlBase + 'rol/eliminar/' + idRol, httpOptions);
  }

  /**
   * Trae los Roles por Nombre
   */
  getRolPorNombre(nombreRol: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('nombreRol', nombreRol),
    };
    return this.http.get(this.urlBase + 'rol/nombre', httpOptions);
  }

  /**
   * Controlar roles repetidos
   */
   /* controlarRepetidos(nombreRol: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('nombreRol', nombreRol),
    };
    return this.http.get(this.urlBase + 'rol/repetido', httpOptions);
  } */
  validarRol(rolNombre: string): Observable<any> {
    console.log("validarROl " + rolNombre);
    let httpOptions = {
      headers: new HttpHeaders({}),
      params: {}
    }
    return this.http.get(this.urlBase + "rol/repetido/" + rolNombre, httpOptions);
  }
}
