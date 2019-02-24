import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/models/medico';
import { environment } from 'src/environments/environment';
import { Convenio } from 'src/app/models/convenio';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private serverUrl = `${environment.API}medicos/`;

  constructor(private http: HttpClient) { }

  public list(page: number, filter: string): Observable<Medico[]> {
    if (filter) {
      return this.http.get<Medico[]>(`${this.serverUrl}${page}/${filter}`);
    } else {
      return this.http.get<Medico[]>(`${this.serverUrl}${page}`);
    }
  }

  public get(id: string): Observable<Medico> {
    return this.http.get<Medico>(`${this.serverUrl}id/${id}`);
  }

  public add(convenio: Convenio): Observable<void> {
    return this.http.post<void>(this.serverUrl, convenio);
  }

  public edit(convenio: Convenio): Observable<void> {
    return this.http.put<void>(`${this.serverUrl}${convenio._id}`, convenio);
  }

  public delete(convenio: Convenio): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}${convenio._id}`);
  }
}
