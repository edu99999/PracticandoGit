import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  urlBase: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  
  getAreas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.urlBase + 'area', httpOptions);
  }

  getAreaUnica(idArea: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('id', idArea),
    };
    return this.http.get(this.urlBase + 'area/' + idArea, httpOptions);
  }

  createArea(area: Area): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };

    let body = JSON.stringify(area);

    return this.http.post(this.urlBase + 'area', body, httpOptions);
  }

  updateArea(area: Area): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };

    let body = JSON.stringify(area);

    return this.http.put(
      this.urlBase + 'area/' + area._id,body,httpOptions
    );
  }

  deleteArea(idArea: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}).append('id', idArea),
    };

    return this.http.delete(this.urlBase + 'area/eliminar/' + idArea, httpOptions);
  }

}
