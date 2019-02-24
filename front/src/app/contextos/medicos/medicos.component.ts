import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Medico } from 'src/app/models/medico';
import { MedicosGridComponent } from './medicos-grid/medicos-grid.component';
import { MedicosFormComponent } from './medicos-form/medicos-form.component';
import { MedicosService } from './medicos.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

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

  constructor(private service: MedicosService,
    private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/medicos/new') {
      this.insert();
    } else if (this.router.url.includes('/medicos/edit/')) {
      this.editMedico(this.router.url.replace('/medicos/edit/', ''));
    } else {
      this.item = undefined;
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
    this.router.navigate(['/medicos']);
  }

  public editMedico(id: string) {
    this.isLoading = true;
    this.service.get(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(m => {
        this.item = m;
        this.showGrid = false;
        this.inserting = false;
        this.isLoading = false;
      });
  }

  public edit(medico: Medico) {
    this.router.navigate(['/medicos/edit/', medico._id]);
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
    result.subscribe(() => this.router.navigate(['/medicos']));
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
