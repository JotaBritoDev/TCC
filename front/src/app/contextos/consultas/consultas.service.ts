import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consulta } from 'src/app/models/consulta';
import { Medico } from 'src/app/models/medico';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private serverUrl = `${environment.API}consultas/`;

  constructor(private http: HttpClient) { }

  public list(page: number): Observable<Consulta[]> {
    const today = new Date();
    return this.http.get<Consulta[]>(`${this.serverUrl}list/${page}/${today}`);
  }

  public listData(data: Date): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${this.serverUrl}data/${data}`);
  }

  public listMedico(medico: Medico, data: Date): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${this.serverUrl}medico/${medico}/data/${data}`);
  }

  public get(id: string): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.serverUrl}id/${id}`);
  }

  public add(consulta: Consulta): Observable<void> {
    return this.http.post<void>(this.serverUrl, consulta);
  }

  public edit(consulta: Consulta): Observable<void> {
    return this.http.put<void>(`${this.serverUrl}${consulta._id}`, consulta);
  }

  public delete(consulta: Consulta): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}${consulta._id}`);
  }
}
