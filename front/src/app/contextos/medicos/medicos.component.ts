import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Medico } from 'src/app/models/medico';
import { MedicosGridComponent } from './medicos-grid/medicos-grid.component';
import { MedicosFormComponent } from './medicos-form/medicos-form.component';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html'
})
export class MedicosComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public showGrid: boolean;
  public inserting: boolean;
  public medicos: Medico[];
  public item: Medico;
  public isLoading: boolean;
  public pagina = 1;
  public ultimoFiltro: string;

  @ViewChild('grid') grid: MedicosGridComponent;
  @ViewChild('form') form: MedicosFormComponent;
  @ViewChild('filtro') filtro: ElementRef;

  constructor(private service: MedicosService) { }

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

  public edit(medico: Medico) {
    this.item = medico;
    this.showGrid = false;
    this.inserting = false;
  }

  private loadList(page) {
    this.isLoading = true;
    this.pagina = page;
    setTimeout(() => {
      this.service.list(page, this.getFiltro())
        .subscribe(data => {
          this.medicos = data;
          this.isLoading = false;
        });
    }, 500);
  }

  public save(medico) {
    this.isLoading = true;
    let result: Observable<void>;
    if (this.inserting) {
      result = this.service.add(medico);
    } else {
      result = this.service.edit(medico);
    }
    result.subscribe(() => this.loadList(this.pagina));
    this.showGrid = true;
    this.ultimoFiltro = '';
  }

  public delete(medico) {
    this.isLoading = true;
    this.service.delete(medico)
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
