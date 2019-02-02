import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-botoes-grid',
  templateUrl: './botoes-grid.component.html'
})
export class BotoesGridComponent implements OnInit {

  @Input() habilitado: boolean;
  @Output() editarEvento: EventEmitter<void> = new EventEmitter();
  @Output() excluirEvento: EventEmitter<void> = new EventEmitter();

  confirmaExclusao: boolean;

  constructor() { }

  ngOnInit() {
  }

}
