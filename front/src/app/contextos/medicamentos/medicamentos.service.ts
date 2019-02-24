import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Medicamento } from 'src/app/models/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  private serverUrl = `${environment.API}medicamentos/`;

  constructor(private http: HttpClient) { }

  public list(page: number, filter: string): Observable<Medicamento[]> {
    if (filter) {
      return this.http.get<Medicamento[]>(`${this.serverUrl}${page}/${filter}`);
    } else {
      return this.http.get<Medicamento[]>(`${this.serverUrl}${page}`);
    }
  }

  public get(id: string): Observable<Medicamento> {
    return this.http.get<Medicamento>(`${this.serverUrl}id/${id}`);
  }

  public add(medicamento): Observable<void> {
    return this.http.post<void>(this.serverUrl, medicamento);
  }

  public edit(medicamento): Observable<void> {
    return this.http.put<void>(`${this.serverUrl}${medicamento._id}`, medicamento);
  }

  public delete(medicamento): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}${medicamento._id}`);
  }
}
