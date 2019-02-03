import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'Healthy:)';
  public _opened = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public selectedRoute(desiredRoute: string) {
    return this.router.url.startsWith('/' + desiredRoute);
  }

  public redirect(route: string) {
    this.router.navigate(['/' + route]);
  }

  constructor(private router: Router) { }
}
