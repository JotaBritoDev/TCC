import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private serverUrl = `${environment.API}pacientes/`;

  constructor(private http: HttpClient) { }

  public list(page): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.serverUrl}${page}`);
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
