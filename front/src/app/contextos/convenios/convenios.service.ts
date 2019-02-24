import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from 'src/app/models/convenio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private serverUrl = `${environment.API}convenios/`;

  constructor(private http: HttpClient) { }

  public list(page: number, filter: string): Observable<Convenio[]> {
    if (filter) {
      return this.http.get<Convenio[]>(`${this.serverUrl}${page}/${filter}`);
    } else {
      return this.http.get<Convenio[]>(`${this.serverUrl}${page}`);
    }
  }

  public get(id: string): Observable<Convenio> {
    return this.http.get<Convenio>(`${this.serverUrl}id/${id}`);
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

  public getCombo(): Observable<Convenio[]> {
    return this.http.get<Convenio[]>(`${this.serverUrl}combo`);
  }
}
