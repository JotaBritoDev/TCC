import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-pacientes-grid',
  templateUrl: './pacientes-grid.component.html'
})
export class PacientesGridComponent implements OnInit {

  @Input() lista: Paciente[];
  @Input() pagina: number;
  @Output() delete: EventEmitter<Paciente> = new EventEmitter();
  @Output() edit: EventEmitter<Paciente> = new EventEmitter();
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
