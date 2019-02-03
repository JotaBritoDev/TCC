import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Medico } from 'src/app/models/medico';

@Component({
  selector: 'app-medicos-grid',
  templateUrl: './medicos-grid.component.html'
})
export class MedicosGridComponent implements OnInit {

  @Input() lista: Medico[];
  @Output() delete: EventEmitter<Medico> = new EventEmitter();
  @Output() edit: EventEmitter<Medico> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
