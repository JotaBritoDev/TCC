import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente';
import { PacientesGridComponent } from './pacientes-grid/pacientes-grid.component';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesService } from './pacientes.service';
import { ConveniosService } from '../convenios/convenios.service';
import { Convenio } from 'src/app/models/convenio';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

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
    private conveniosService: ConveniosService,
    private router: Router) { }

  ngOnInit() {
    this.loadCombo();
    this.item = undefined;
    this.showGrid = true;
    this.inserting = false;

    if (this.router.url === '/pacientes/new') {
      this.insert();
    } else if (this.router.url.includes('/pacientes/edit/')) {
      this.editPaciente(this.router.url.replace('/pacientes/edit/', ''));
    } else {
      this.loadList(this.pagina);
    }
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
    this.router.navigate(['/pacientes']);
  }

  public edit(paciente: Paciente) {
    this.router.navigate(['/pacientes/edit', paciente._id]);
  }

  public editPaciente(id: string) {
    this.isLoading = true;
    setTimeout(() => {
      this.service.get(id)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(p => {
          this.item = p;
          this.showGrid = false;
          this.inserting = false;
          this.isLoading = false;
        });
    }, 250);
  }

  private loadList(page) {
    this.isLoading = true;
    this.pagina = page;
    setTimeout(() => {
      this.service.list(page, this.getFiltro())
        .subscribe(data => {
          this.pacientes = data;
          this.isLoading = false;
        });
    }, 500);
  }

  public save(paciente) {
    this.isLoading = true;
    let result: Observable<void>;
    if (this.inserting) {
      result = this.service.add(paciente);
    } else {
      result = this.service.edit(paciente);
    }
    result.subscribe(() => this.loadList(this.pagina));
    this.showGrid = true;
    this.ultimoFiltro = '';
    this.router.navigate(['/pacientes']);
  }

  public delete(paciente) {
    this.isLoading = true;
    this.service.delete(paciente)
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
