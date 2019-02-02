import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicamentos-grid',
  templateUrl: './medicamentos-grid.component.html'
})
export class MedicamentosGridComponent implements OnInit {

  @Input() lista: [];
  @Output() delete = new EventEmitter;
  @Output() edit = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
