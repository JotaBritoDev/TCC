import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento';

@Component({
  selector: 'app-medicamentos-grid',
  templateUrl: './medicamentos-grid.component.html'
})
export class MedicamentosGridComponent implements OnInit {

  @Input() lista: Medicamento[];
  @Output() delete: EventEmitter<Medicamento> = new EventEmitter();
  @Output() edit: EventEmitter<Medicamento> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
