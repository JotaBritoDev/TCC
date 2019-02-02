import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public redirect(route: string) {
    this.router.navigate(['/' + route]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
