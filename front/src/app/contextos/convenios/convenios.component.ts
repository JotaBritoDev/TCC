import { Component, OnInit } from '@angular/core';
import { ConveniosService } from './convenios.service';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html'
})
export class ConveniosComponent implements OnInit {

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

  constructor(private service: ConveniosService) { }

  ngOnInit() {
    this.loadList(1);
  }

}
