import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sem-registro-grid',
  templateUrl: './sem-registro-grid.component.html'
})
export class SemRegistroGridComponent implements OnInit {

  @Input() textoSemRegistros = 'Nenhum registro encontrado.';
  @Input() lista: [];
  @Input() pagina: number;
  @Output() voltar: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
