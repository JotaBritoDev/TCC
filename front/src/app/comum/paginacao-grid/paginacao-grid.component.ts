import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paginacao-grid',
  templateUrl: './paginacao-grid.component.html'
})
export class PaginacaoGridComponent implements OnInit {

  @Input() pagina: number;
  @Input() lista: [];
  @Output() changePage: EventEmitter<number> = new EventEmitter();
  @ViewChild('inputPagina') inputPagina: ElementRef;

  constructor() {
    this.pagina = 1;
  }

  ngOnInit() {
    this.inputPagina.nativeElement.value = this.pagina;
  }

  public changePagina(acao: number) {
    let atualizar = false;
    if ((acao === -1) && (this.pagina > 1)) {
      atualizar = true;
      this.pagina -= 1;
    } else if (acao === 1) {
      atualizar = true;
      this.pagina += 1;
    } else if (acao === 0) {
      const paginaInterna: number = <number> this.inputPagina.nativeElement.value;
      if ((paginaInterna > 0) && (this.pagina !== paginaInterna)) {
        atualizar = true;
        this.pagina = parseInt(`${paginaInterna}`, 10);
      }
    }
    this.inputPagina.nativeElement.value = this.pagina;
    if (atualizar) {
      this.changePage.emit(this.pagina);
    }
  }

  public getVisibilidade(): boolean {
    return ((!this.lista) || (this.lista.length === 0) || ((this.lista.length < 10) && (this.pagina === 1)));
  }

}
