import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Consulta } from 'src/app/models/consulta';

import { ConsultasFormComponent } from './consultas-form/consultas-form.component';
import { ConsultasGridComponent } from './consultas-grid/consultas-grid.component';
import { ConsultasService } from './consultas.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConsultasAtendimentoComponent } from './consultas-atendimento/consultas-atendimento.component';
import { Medicamento } from 'src/app/models/medicamento';
import { MedicamentosService } from '../medicamentos/medicamentos.service';

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
  public atender: boolean;
  public medicamentos: Medicamento[];

  @ViewChild('grid') grid: ConsultasGridComponent;
  @ViewChild('form') form: ConsultasFormComponent;
  @ViewChild('atendimento') atendimento: ConsultasAtendimentoComponent;

  constructor(private consultasService: ConsultasService,
    private router: Router,
    private medicamentosService: MedicamentosService) { }

  ngOnInit() {
    this.loadCombo();
    this.atender = false;
    this.item = undefined;
    if (this.router.url === '/consultas/new') {
      this.insert();
    } else if (this.router.url.includes('/consultas/edit')) {
      this.editConsulta(this.router.url.replace('/consultas/edit/', ''));
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

  public loadCombo() {
    this.medicamentosService.getCombo()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(retorno => {
        this.medicamentos = retorno;
      });
  }

  public insert() {
    this.item = undefined;
    this.showGrid = false;
    this.inserting = true;
  }

  public cancel() {
    this.showGrid = true;
    this.router.navigate(['/consultas']);
  }

  public editConsulta(id: string) {
    this.isLoading = true;
    this.consultasService.get(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(m => {
        this.item = m;
        this.showGrid = false;
        this.inserting = false;
        this.isLoading = false;
        this.atender = true;
      });
  }

  public edit(consulta: Consulta) {
    this.router.navigate(['/consultas/edit/', consulta._id]);
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

  public save(consulta: Consulta) {
    this.isLoading = true;
    let observable: Observable<void>;
    if (this.inserting) {
      observable = this.consultasService.add(consulta);
    } else {
      observable = this.consultasService.edit(consulta);
    }
    observable.pipe(takeUntil(this.unsubscribe))
    .subscribe(() => this.router.navigate(['/consultas']));
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
