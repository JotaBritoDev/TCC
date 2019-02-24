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

  public list(page: number, filter: string): Observable<Paciente[]> {
    if (filter) {
      return this.http.get<Paciente[]>(`${this.serverUrl}${page}/${filter}`);
    } else {
      return this.http.get<Paciente[]>(`${this.serverUrl}${page}`);
    }
  }

  public get(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.serverUrl}id/${id}`);
  }

  public add(paciente: Paciente): Observable<void> {
    return this.http.post<void>(this.serverUrl, paciente);
  }

  public edit(paciente: Paciente): Observable<void> {
    return this.http.put<void>(`${this.serverUrl}${paciente._id}`, paciente);
  }

  public delete(paciente: Paciente): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}${paciente._id}`);
  }

}
