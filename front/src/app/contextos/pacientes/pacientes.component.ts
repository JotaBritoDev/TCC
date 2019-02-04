import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente';
import { PacientesGridComponent } from './pacientes-grid/pacientes-grid.component';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesService } from './pacientes.service';
import { ConveniosService } from '../convenios/convenios.service';
import { Convenio } from 'src/app/models/convenio';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  public showGrid: boolean;
  public inserting: boolean;
  public pacientes: Paciente[];
  public item: Paciente;
  public isLoading: boolean;
  public pagina = 1;
  public conveniosCombo: Convenio[];
  public ultimoFiltro: string;

  @ViewChild('grid') grid: PacientesGridComponent;
  @ViewChild('form') form: PacientesFormComponent;
  @ViewChild('filtro') filtro: ElementRef;

  constructor(private service: PacientesService,
    private conveniosService: ConveniosService) { }

  ngOnInit() {
    this.item = undefined;
    this.showGrid = true;
    this.inserting = false;
    this.loadList(this.pagina, this.getFiltro());
    this.loadCombo();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public loadCombo() {
    this.conveniosService.getCombo()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(data => {
        this.conveniosCombo = data;
      });
  }

  public insert() {
    this.item = undefined;
    this.showGrid = false;
    this.inserting = true;
  }

  public cancel() {
    this.showGrid = true;
  }

  public edit(medico: Paciente) {
    this.item = medico;
    this.showGrid = false;
    this.inserting = false;
  }

  private loadList(page, filtro) {
    this.isLoading = true;
    this.pagina = page;
    setTimeout(() => {
      this.service.list(page, filtro)
        .subscribe(data => {
          this.pacientes = data;
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
    result.subscribe(() => this.loadList(this.pagina, this.getFiltro()));
    this.showGrid = true;
  }

  public delete(medico) {
    this.isLoading = true;
    this.service.delete(medico)
      .subscribe(() => this.loadList(this.pagina, this.getFiltro()));
  }

  private getFiltro(): string {
    return this.filtro ? this.filtro.nativeElement.value : '';
  }

  public filtrar() {
    const novoFiltro = this.getFiltro();
    if (this.ultimoFiltro !== novoFiltro) {
      this.loadList(1, novoFiltro);
      this.ultimoFiltro = novoFiltro;
    }
  }

  public limparFiltro() {
    this.ultimoFiltro = '';
  }

}
