import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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

  @ViewChild('grid') grid: MedicosGridComponent;
  @ViewChild('form') form: MedicosFormComponent;

  constructor(private service: MedicosService) { }

  ngOnInit() {
    this.item = undefined;
    this.showGrid = true;
    this.inserting = false;
    this.loadList(1);
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
    setTimeout(() => {
      this.service.list(page)
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
    result.subscribe(() => this.loadList(1));
    this.showGrid = true;
  }

  public delete(medico) {
    this.isLoading = true;
    this.service.delete(medico)
      .subscribe(() => this.loadList(1));
  }

}
