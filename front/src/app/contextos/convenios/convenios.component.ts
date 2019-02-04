import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ConveniosService } from './convenios.service';
import { Subject, Observable } from 'rxjs';
import { Convenio } from 'src/app/models/convenio';
import { ConveniosGridComponent } from './convenios-grid/convenios-grid.component';
import { ConveniosFormComponent } from './convenios-form/convenios-form.component';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html'
})
export class ConveniosComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public showGrid: boolean;
  public inserting: boolean;
  public convenios: Convenio[];
  public item: Convenio;
  public isLoading: boolean;
  public pagina = 1;
  public ultimoFiltro: string;

  @ViewChild('grid') grid: ConveniosGridComponent;
  @ViewChild('form') form: ConveniosFormComponent;
  @ViewChild('filtro') filtro: ElementRef;

  constructor(private service: ConveniosService) { }

  ngOnInit() {
    this.item = undefined;
    this.showGrid = true;
    this.inserting = false;
    this.loadList(this.pagina);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public insert() {
    this.item = undefined;
    this.showGrid = false;
    this.inserting = true;
  }

  public cancel() {
    this.showGrid = true;
  }

  public edit(convenio: Convenio) {
    this.item = convenio;
    this.showGrid = false;
    this.inserting = false;
  }

  private loadList(page) {
    this.isLoading = true;
    this.pagina = page;
    setTimeout(() => {
      this.service.list(page, this.getFiltro())
        .subscribe(data => {
          this.convenios = data;
          this.isLoading = false;
        });
    }, 500);
  }

  public save(convenio) {
    this.isLoading = true;
    let result: Observable<void>;
    if (this.inserting) {
      result = this.service.add(convenio);
    } else {
      result = this.service.edit(convenio);
    }
    result.subscribe(() => this.loadList(this.pagina));
    this.showGrid = true;
  }

  public delete(convenio) {
    this.isLoading = true;
    this.service.delete(convenio)
      .subscribe(() => this.loadList(this.pagina));
  }

  private getFiltro(): string {
    return this.filtro ? this.filtro.nativeElement.value : '';
  }

  public filtrar() {
    const novoFiltro = this.getFiltro();
    if (this.ultimoFiltro !== novoFiltro) {
      this.loadList(1);
      this.ultimoFiltro = novoFiltro;
    }
  }

}
