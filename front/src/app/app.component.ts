import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'Healthy:)';
  public _opened = false;

  constructor(private router: Router,
    private loginService: LoginService) { }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public selectedRoute(desiredRoute: string) {
    return this.router.url.startsWith('/' + desiredRoute);
  }

  public redirect(route: string) {
    this.router.navigate(['/' + route]);
  }

  public exibirBarra() {
    return this.loginService.UsuarioAutenticado();
  }

  public logoff() {
    this.loginService.logoff();
    this.router.navigate(['/login']);
  }

}
