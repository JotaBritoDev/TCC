import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicos-form',
  templateUrl: './medicos-form.component.html'
})
export class MedicosFormComponent implements OnInit {

  @Output() finalizouAlteracao = new EventEmitter();

  public onSubmit(form) {
    console.log(form.value);
    this.finalizouAlteracao.emit();
  }

  public cancelar() {
    this.finalizouAlteracao.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
