import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/models/medico';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private serverUrl = `${environment.API}medicos/`;

  constructor(private http: HttpClient) { }

  public list(page): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.serverUrl}${page}`);
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
