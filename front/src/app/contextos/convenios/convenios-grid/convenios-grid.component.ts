import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Convenio } from 'src/app/models/convenio';


@Component({
  selector: 'app-convenios-grid',
  templateUrl: './convenios-grid.component.html'
})
export class ConveniosGridComponent implements OnInit {

  @Input() lista: Convenio[];
  @Output() delete: EventEmitter<Convenio> = new EventEmitter();
  @Output() edit: EventEmitter<Convenio> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
