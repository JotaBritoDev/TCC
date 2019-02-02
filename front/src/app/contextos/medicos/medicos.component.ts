import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html'
})
export class MedicosComponent implements OnInit {

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
