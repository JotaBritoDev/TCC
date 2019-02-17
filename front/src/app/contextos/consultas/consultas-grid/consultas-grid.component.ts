import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';

@Component({
  selector: 'app-consultas-grid',
  templateUrl: './consultas-grid.component.html'
})
export class ConsultasGridComponent implements OnInit {

  @Input() lista: Consulta[];
  @Input() pagina: number;
  @Output() delete: EventEmitter<Consulta> = new EventEmitter();
  @Output() edit: EventEmitter<Consulta> = new EventEmitter();
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  public formatDateHour(date: Date): string {
    const dt = new Date(date.toString());
    return dt.toLocaleDateString('pt-BR') + ' ' + dt.toLocaleTimeString('pt-BR').substr(0, 5);
  }

  public formatDate(date: Date): string {
    const dt = new Date(date.toString());
    return dt.toLocaleDateString('pt-BR');
  }

  public formatHour(date: Date): string {
    const dt = new Date(date.toString());
    return dt.toLocaleTimeString('pt-BR').substr(0, 5);
  }

}
