import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Consulta } from 'src/app/models/consulta';

import { ConsultasFormComponent } from './consultas-form/consultas-form.component';
import { ConsultasGridComponent } from './consultas-grid/consultas-grid.component';
import { ConsultasService } from './consultas.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html'
})
export class ConsultasComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public showGrid: boolean;
  public inserting: boolean;
  public consultas: Consulta[];
  public item: Consulta;
  public isLoading: boolean;
  public pagina = 1;
  public ultimoFiltro: string;

  @ViewChild('grid') grid: ConsultasGridComponent;
  @ViewChild('form') form: ConsultasFormComponent;

  constructor(private consultasService: ConsultasService,
    private route: Router) { }

  ngOnInit() {
    this.item = undefined;
    if (this.route.url === '/consultas/new') {
      this.insert();
    } else {
      this.showGrid = true;
      this.inserting = false;
      this.loadList(this.pagina);
    }
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

  public edit(consulta: Consulta) {
    this.item = consulta;
    this.showGrid = false;
    this.inserting = false;
  }

  private loadList(page) {
    this.isLoading = true;
    this.pagina = page;
    setTimeout(() => {
      this.consultasService.list(page)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(data => {
          this.consultas = data;
          this.isLoading = false;
        });
    }, 500);
  }

  public save(consulta) {
    this.isLoading = true;
    let observable: Observable<void>;
    if (this.inserting) {
      observable = this.consultasService.add(consulta);
    } else {
      observable = this.consultasService.edit(consulta);
    }
    observable.pipe(takeUntil(this.unsubscribe))
    .subscribe(() => this.loadList(this.pagina));
    this.showGrid = true;
    this.ultimoFiltro = '';
  }

  public delete(consulta) {
    this.isLoading = true;
    this.consultasService.delete(consulta)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.loadList(this.pagina));
  }

}
