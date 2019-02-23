import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html'
})
export class AgendaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  public novaConsulta() {
    this.route.navigateByUrl('/consultas/new');
  }

}
