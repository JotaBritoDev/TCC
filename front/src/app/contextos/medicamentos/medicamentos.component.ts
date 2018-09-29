import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from './medicamentos.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {

  public showGrid = true;
  public inserting = false;
  public lista: any;

  public insert() {
    this.showGrid = false;
    this.inserting = true;
  }

  public cancel() {
    this.showGrid = true;
  }

  public edit() {
    this.showGrid = false;
    this.inserting = false;
  }

  private loadList(page) {
    this.service.list(page)
      .subscribe(data => this.lista = data);
  }

  public save(medicamento) {
    let result: any;
    if (this.inserting) {
      result = this.service.add(medicamento);
    } else {
      result = this.service.edit(medicamento);
    }
    result.subscribe(() => this.loadList(1));
    this.showGrid = true;
  }

  public delete(medicamento) {
    this.service.delete(medicamento)
      .subscribe(() => this.loadList(1));
  }

  constructor(private service: MedicamentosService) { }

  ngOnInit() {
    this.loadList(1);
  }

}
