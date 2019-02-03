import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from 'src/app/models/convenio';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private serverUrl = `${environment.API}convenios/`;

  constructor(private http: HttpClient) { }

  public list(page): Observable<Convenio[]> {
    return this.http.get<Convenio[]>(`${this.serverUrl}${page}`);
  }

  public add(convenio): Observable<void> {
    return this.http.post<void>(this.serverUrl, convenio);
  }

  public edit(convenio): Observable<void> {
    return this.http.put<void>(`${this.serverUrl}${convenio._id}`, convenio);
  }

  public delete(convenio): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}${convenio._id}`);
  }
}
