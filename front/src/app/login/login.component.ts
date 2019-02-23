import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public mensagemErro = '';
  public logando = false;

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public validaLogin(usuario: string, senha: string) {
    this.logando = true;
    this.limpaMensagem();
    this.loginService.validaLogin(usuario, senha)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        if (result.retorno) {
          this.loginService.autenticado();
          this.router.navigate(['/consultas']);
        } else {
          this.mensagemErro = 'Usuário e/ou senha inváidos.';
        }
        this.logando = false;
      });
  }

  public limpaMensagem() {
    this.mensagemErro = '';
  }

}
