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

  constructor(private httpClient: HttpClient) { }

  public list(page: number): Observable<Medicamento[]> {
    return this.httpClient.get<Medicamento[]>(`${this.serverUrl}${page}`);
  }

  public add(medicamento): Observable<void> {
    return this.httpClient.post<void>(this.serverUrl, medicamento);
  }

  public edit(medicamento): Observable<void> {
    return this.httpClient.put<void>(`${this.serverUrl}${medicamento._id}`, medicamento);
  }

  public delete(medicamento): Observable<void> {
    return this.httpClient.delete<void>(`${this.serverUrl}${medicamento._id}`);
  }
}
