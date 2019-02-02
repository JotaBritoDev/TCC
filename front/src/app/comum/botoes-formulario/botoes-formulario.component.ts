import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botoes-formulario',
  templateUrl: './botoes-formulario.component.html'
})
export class BotoesFormularioComponent implements OnInit {

  @Input() habilitado: boolean;
  @Output() salvarEvent: EventEmitter<void> = new EventEmitter();
  @Output() cancelarEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
