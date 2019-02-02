import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html'
})
export class ConsultasComponent implements OnInit {

  public formVisible = false;

  public showForm() {
    this.formVisible = true;
  }

  public showGrid() {
    this.formVisible = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
