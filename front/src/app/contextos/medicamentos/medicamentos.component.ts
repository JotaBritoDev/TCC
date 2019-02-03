import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Medicamento } from 'src/app/models/medicamento';

import { MedicamentosFormComponent } from './medicamentos-form/medicamentos-form.component';
import { MedicamentosGridComponent } from './medicamentos-grid/medicamentos-grid.component';
import { MedicamentosService } from './medicamentos.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html'
})
export class MedicamentosComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public showGrid: boolean;
  public inserting: boolean;
  public medicamentos: Medicamento[];
  public item: Medicamento;
  public isLoading: boolean;
  public pagina = 1;

  @ViewChild('grid') grid: MedicamentosGridComponent;
  @ViewChild('form') form: MedicamentosFormComponent;

  constructor(private service: MedicamentosService) { }

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

  public edit(medicamento: Medicamento) {
    this.item = medicamento;
    this.showGrid = false;
    this.inserting = false;
  }

  private loadList(page: number) {
    this.isLoading = true;
    this.pagina = page;
    setTimeout(() => {
      this.service.list(page)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(data => {
          this.medicamentos = data;
          this.isLoading = false;
        });
    }, 500);
  }

  public save(medicamento) {
    this.isLoading = true;
    let observable: Observable<void>;
    if (this.inserting) {
      observable = this.service.add(medicamento);
    } else {
      observable = this.service.edit(medicamento);
    }
    observable.pipe(takeUntil(this.unsubscribe))
    .subscribe(() => this.loadList(this.pagina));
    this.showGrid = true;
  }

  public delete(medicamento) {
    this.isLoading = true;
    this.service.delete(medicamento)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.loadList(this.pagina));
  }

}
