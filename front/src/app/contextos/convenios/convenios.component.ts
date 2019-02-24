import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ConveniosService } from './convenios.service';
import { Subject, Observable } from 'rxjs';
import { Convenio } from 'src/app/models/convenio';
import { ConveniosGridComponent } from './convenios-grid/convenios-grid.component';
import { ConveniosFormComponent } from './convenios-form/convenios-form.component';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

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

  constructor(private service: ConveniosService,
    private router: Router) { }

  ngOnInit() {
    this.item = undefined;
    this.showGrid = true;
    this.inserting = false;

    if (this.router.url === '/convenios/new') {
      this.insert();
    } else if (this.router.url.includes('/convenios/edit/')) {
      this.editConvenio(this.router.url.replace('/convenios/edit/', ''));
    } else {
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
    this.router.navigate(['/convenios']);
  }

  public editConvenio(id: string) {
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

  public edit(convenio: Convenio) {
    this.router.navigate(['/convenios/edit', convenio._id]);
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
    result.subscribe(() => this.router.navigate(['/convenios']));
    this.showGrid = true;
    this.ultimoFiltro = '';
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
