import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private serverUrl = `${environment.API}convenios/`;

  constructor(private http: HttpClient) { }

  public list(page) {
    return this.http.get(`${this.serverUrl}${page}`)
      .pipe(
        first()
      );
  }

  public add(medicamento) {
    return this.http.post(this.serverUrl, medicamento)
      .pipe(
        first()
      );
  }

  public edit(medicamento) {
    return this.http.put(`${this.serverUrl}${medicamento._id}`, medicamento)
      .pipe(
        first()
      );
  }

  public delete(medicamento) {
    return this.http.delete(`${this.serverUrl}${medicamento._id}`)
      .pipe(
        first()
      );
  }
}
