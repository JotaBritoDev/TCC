import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private serverUrl = `${environment.API}login/`;

  constructor(private http: HttpClient) {
  }

  public validaLogin(usuario: string, senha: string): Observable<any> {
    return this.http.post<any>(this.serverUrl, { usu: usuario, snh: senha });
  }

  public autenticado() {
    sessionStorage.setItem('logado', '1');
  }

  public logoff() {
    sessionStorage.clear();
  }

  public UsuarioAutenticado(): boolean {
    return sessionStorage.getItem('logado') === '1';
  }
}
